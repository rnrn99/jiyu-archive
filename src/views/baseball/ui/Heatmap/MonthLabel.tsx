import React from 'react';

import * as styles from './MonthLabel.css';
import { HeatmapGrid } from './types';

interface Props {
  monthLabels: HeatmapGrid['monthLabels'];
}

function MonthLabel({ monthLabels }: Props) {
  return (
    <div className={styles.monthLabelsRow}>
      {monthLabels.map(({ label, width, startWeek }) => (
        <span key={startWeek} className={styles.monthLabel} style={{ width }}>
          {label}
        </span>
      ))}
    </div>
  );
}

export default MonthLabel;
