import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Tile from '../components/Tile';
import styles from './index.module.scss';
import Search from '../components/Search';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const allTiles = siteConfig.customFields.categories
    .reduce((acc, category) => [...acc, ...category.items], [])
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Layout
      title={siteConfig.tagline}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.main}>
        <div className={styles.heading}>
          <p>support.dilanxd.com</p>
          <h1>Find answers here.</h1>
        </div>

        <Search />

        <div className={styles.tiles}>
          {allTiles.map((item) => (
            <Tile key={item.label} {...item} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
