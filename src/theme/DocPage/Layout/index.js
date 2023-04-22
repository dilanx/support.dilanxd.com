import React, { useState } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import DocPageLayoutSidebar from '@theme/DocPage/Layout/Sidebar';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import styles from './styles.module.css';
export default function DocPageLayout({ children }) {
  return (
    <Layout wrapperClassName={styles.docsWrapper}>
      <BackToTopButton />
      <div className={styles.docPage}>
        <DocPageLayoutMain>{children}</DocPageLayoutMain>
      </div>
    </Layout>
  );
}
