import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './CircleBadge.module.scss';


export class CircleBadge extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    large: PropTypes.bool,
    logo: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    large: false,
    color: '#F9FAFB',
  };

  renderLogo() {
    const { name, logo } = this.props;
    if (!logo) return null;
    return (
      <img src={require(`../../images/logo/${logo}`)} alt={`${name} logo`} />
    );
  }

  render() {
    const { large, color } = this.props;

    return (
      <div
        className={classNames(styles.circleBadge, { [styles.circleBadgeLarge]: large })}
        style={{ backgroundColor: color }}
      >
        {this.renderLogo()}
      </div>
    );
  }
}
