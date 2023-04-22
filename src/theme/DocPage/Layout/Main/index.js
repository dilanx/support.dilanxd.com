import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}) {
  return (
    <main className={styles.docMainContainer}>
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}
      </div>
    </main>
  );
}
