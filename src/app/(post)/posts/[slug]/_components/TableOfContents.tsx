'use client';

import React, { useEffect, useState } from 'react';

import { ExtendedRecordMap } from 'notion-types';

import { TableOfContentsItem } from '@/entity/post/type';
import NotionAdapter from '@/infrastructure/notion/adapter';

import * as styles from './TableOfContents.css';

const MIN_WIDTH_TO_SHOW_TOC = 1280;

const TARGET_ATTRIBUTE = 'data-id';
const convertToIdFormat = (blockId: TableOfContentsItem['blockId']) => blockId.replaceAll('-', '');

interface Props {
  recordMap: ExtendedRecordMap;
}

function TableOfContents({ recordMap }: Props) {
  const [headingList, setHeadingList] = useState<TableOfContentsItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, heading: TableOfContentsItem) => {
    e.preventDefault();

    const { blockId, level } = heading;
    const convertedId = convertToIdFormat(blockId);

    const element = document.querySelector(`h${level}[${TARGET_ATTRIBUTE}="${convertedId}"]`);

    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const marginTop = parseFloat(computedStyle.marginTop) || 0;

      const elementRect = element.getBoundingClientRect();
      const targetScrollY = window.scrollY + elementRect.top - marginTop;

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth',
      });

      window.history.replaceState(null, '', `#${convertedId}`);
    }
  };

  useEffect(() => {
    setHeadingList(NotionAdapter.getHeadingList(recordMap));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataId = entry.target.getAttribute(TARGET_ATTRIBUTE) ?? '';
            setActiveId(dataId);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
      },
    );

    const headingElements = document.querySelectorAll('h2[data-id], h3[data-id], h4[data-id]');
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [recordMap]);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth >= MIN_WIDTH_TO_SHOW_TOC);
    };

    checkWidth();

    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  if (!headingList.length || !isVisible) return null;
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {headingList.map((heading) => {
          const convertedId = convertToIdFormat(heading.blockId);
          const isActive = activeId === convertedId;

          const level = parseInt(heading.level, 10);

          return (
            <li key={heading.blockId} className={styles.listItem} data-level={level}>
              <a
                onClick={(e) => handleClick(e, heading)}
                className={isActive ? styles.linkActive : styles.link}
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TableOfContents;
