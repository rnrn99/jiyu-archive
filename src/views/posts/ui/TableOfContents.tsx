'use client';

import React, { useEffect, useRef, useState } from 'react';

import { ExtendedRecordMap } from 'notion-types';

import { TableOfContentsItem } from '@/entity/post';
import { NotionAdapter } from '@/feature/post';

import * as styles from './TableOfContents.css';

const MIN_WIDTH_TO_SHOW_TOC = 1120;
const SITE_HEADER_HEIGHT = 56;
const STICKY_TOP_OFFSET = 24;

const TARGET_ATTRIBUTE = 'data-id';
const convertToIdFormat = (blockId: TableOfContentsItem['blockId']) => blockId.replaceAll('-', '');

const getLinkClass = (level: number, isActive: boolean): string => {
  if (isActive) {
    if (level === 3) return styles.linkActiveL3;
    if (level === 4) return styles.linkActiveL4;
    return styles.linkActive;
  }
  if (level === 3) return styles.linkL3;
  if (level === 4) return styles.linkL4;
  return styles.link;
};

interface Props {
  recordMap: ExtendedRecordMap;
}

function TableOfContents({ recordMap }: Props) {
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const tocTopRef = useRef<number>(0);

  const [headingList, setHeadingList] = useState<TableOfContentsItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${convertedId}`);
    }
  };

  // PostHeader 하단 절대 위치 측정
  useEffect(() => {
    const measureTocTop = () => {
      const postHeader = document.querySelector('[data-post-header]');
      if (!postHeader || !navRef.current) return;

      const rect = postHeader.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.bottom;
      tocTopRef.current = absoluteTop;

      navRef.current.style.setProperty('--toc-top', `${absoluteTop}px`);
    };

    const raf = requestAnimationFrame(measureTocTop);
    window.addEventListener('resize', measureTocTop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measureTocTop);
    };
  }, [headingList]);

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
      { rootMargin: '0px 0px -80% 0px', threshold: 0 },
    );

    const headingElements = document.querySelectorAll('h2[data-id], h3[data-id], h4[data-id]');
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [recordMap]);

  useEffect(() => {
    const checkWidth = () => setIsVisible(window.innerWidth >= MIN_WIDTH_TO_SHOW_TOC);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // activeId 변경 시 목차 내부 스크롤로 해당 링크 노출
  useEffect(() => {
    if (!activeId || !listRef.current) return;

    const activeLink = listRef.current.querySelector(`a[href="#${activeId}"]`);
    if (activeLink) {
      activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeId]);

  // 스크롤: sticky 전환 + progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const stickyThreshold = tocTopRef.current - SITE_HEADER_HEIGHT - STICKY_TOP_OFFSET;
      setIsSticky(scrollTop > stickyThreshold);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!headingList.length || !isVisible) return null;

  return (
    <nav ref={navRef} className={isSticky ? styles.navFixed : styles.navAbsolute}>
      <p className={styles.heading}>목차</p>
      <ul ref={listRef} className={styles.list}>
        {headingList.map((heading) => {
          const convertedId = convertToIdFormat(heading.blockId);
          const isActive = activeId === convertedId;
          const level = parseInt(heading.level, 10);

          return (
            <li key={heading.blockId} className={styles.listItem}>
              <a
                href={`#${convertedId}`}
                onClick={(e) => handleClick(e, heading)}
                className={getLinkClass(level, isActive)}
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
      </div>
    </nav>
  );
}

export default TableOfContents;
