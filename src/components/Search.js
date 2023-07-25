import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Maybe one day I'll let you search."
        disabled
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
