import React from 'react';
import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search is not available yet." disabled />
    </div>
  );
}
