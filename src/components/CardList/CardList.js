import React, { Component } from 'react';
import styles from './CardList.module.scss';


export class CardList extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.cardList}>
        {children}
      </div>
    );
  }
}
