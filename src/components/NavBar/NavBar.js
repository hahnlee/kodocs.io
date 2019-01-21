import React, { Component } from 'react';

import styles from './NavBar.module.scss';


export class NavBar extends Component {
  render() {
    const { children } = this.props;

    return (
      <nav className={styles.navBar}>
        <div className={styles.content}>
          {children}
        </div>
      </nav>
    );
  }
}
