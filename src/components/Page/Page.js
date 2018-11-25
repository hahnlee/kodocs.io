import React, { Component } from 'react';

import styles from './Page.module.scss';
import './Page.scss';


export class Page extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.page}>
        {children}
      </div>
    );
  }
}
