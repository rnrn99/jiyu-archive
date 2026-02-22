'use client';

import React, { ComponentProps, useCallback, useState } from 'react';

import { CodeBlock } from 'notion-types';
import { Code as _Code } from 'react-notion-x/build/third-party/code';

import * as styles from './CodeBlock.css';
import './Code.css';

type Props = ComponentProps<typeof _Code>;

function Code(props: Props) {
  const block = props.block as CodeBlock;
  const language = block.properties?.language?.[0]?.[0] ?? 'plain text';
  const code = block.properties?.title?.map(([text]) => text).join('') ?? '';

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className={styles.codeWrapper}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLang}>{language.toLowerCase()}</span>
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? 'copied!' : 'copy'}
        </button>
      </div>
      <_Code {...props} />
    </div>
  );
}

export default Code;
