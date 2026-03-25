import React from 'react';

import * as styles from './Legend.css';
import { CellVariant } from './types';

const GAME_RESULT_LIST = [
  'big-lose',
  'lose',
  'draw',
  'win',
  'big-win',
] as const satisfies CellVariant[];

function Legend() {
  return (
    <div className={styles.legendWrapper}>
      <div className={styles.legendGroup}>
        <span className={styles.legendText}>패</span>
        {GAME_RESULT_LIST.map((v) => (
          <div key={v} className={styles.legendCellVariants[v]} />
        ))}
        <span className={styles.legendText}>승</span>
      </div>

      <div className={styles.legendSep} />

      <div className={styles.legendGroup}>
        <div className={styles.legendCellVariants.empty} />
        <span className={styles.legendText}>없음</span>
      </div>

      <div className={styles.legendGroup}>
        <div className={styles.legendCellVariants.scheduled} />
        <span className={styles.legendText}>예정</span>
      </div>

      <div className={styles.legendSep} />

      <div className={styles.legendGroup}>
        <div className={styles.legendCellVariants.visited} />
        <span className={styles.legendText}>직관</span>
      </div>
    </div>
  );
}

export default Legend;
