import React from 'react';

import * as styles from './DayLabel.css';

const DAY_LABEL_MAP: Record<number, string> = {
  1: '화',
  4: '금',
  6: '일',
};

const dayLabelItems = Array.from({ length: 7 }, (_, i) => ({
  dow: i,
  label: DAY_LABEL_MAP[i] ?? null,
}));

function DayLabel() {
  return (
    <div className={styles.dayLabels}>
      <div className={styles.monthLabelSpacer} />
      {dayLabelItems.map(({ dow, label }) =>
        label ? (
          <div key={dow} className={styles.dayLabelText}>
            {label}
          </div>
        ) : (
          <div key={dow} className={styles.dayLabelEmpty} />
        ),
      )}
    </div>
  );
}

export default DayLabel;
