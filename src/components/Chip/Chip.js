import React, { Component } from 'react';

import styles from './Chip.module.scss';


export class Chip extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.chip}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}
