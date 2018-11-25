import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Chip.module.scss';


export class Chip extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <div className={styles.chip}>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
}
