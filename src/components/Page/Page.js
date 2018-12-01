import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { NavBar } from '../NavBar';
import styles from './Page.module.scss';

import './Page.scss';


export class Page extends Component {
  static defaultProps = {
    title: 'kodocs.io',
  };

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.page}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <NavBar>Kodocs.io</NavBar>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    );
  }
}
