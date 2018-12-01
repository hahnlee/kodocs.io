import React, { Component } from 'react';

import styles from './PackageList.module.scss';


export class PackageList extends Component {
  render() {
    const { children } = this.props;

    return (
      <section className={styles.packageList}>
        {children}
      </section>
    );
  }
}
