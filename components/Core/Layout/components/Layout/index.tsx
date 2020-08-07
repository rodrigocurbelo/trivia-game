// This file should be imported from every file inside pages/.
// This will include the <head> into the final output and some
// basic styling of body, env, etc.

import React, { useEffect } from 'react';
import Head from 'next/head';

import styles from './styles.scss';

export default function Layout({
  children,
  restartMultipleOptionsGame
}) {
  useEffect(
    () => () => restartMultipleOptionsGame,
    [ restartMultipleOptionsGame ]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia game</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {children}
    </div>
  );
}
