import React, { Component } from 'react';
import styles from './SideBar.module.scss';


export class SideBar extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.sideBar}>
        {children}
      </div>
    );
  }
}
