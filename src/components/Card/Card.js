import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Chip } from '../Chip';
import { CircleBadge } from '../CircleBadge';

import styles from './Card.module.scss';


export class Card extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      logo: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  renderLogo() {
    const { data } = this.props;
    const { name, logo } = data;

    if (!logo) return null;
    return (
      <img
        src={require(`../../images/logo/${logo}`)}
        alt={`${name} logo`}
      />
    );
  }

  renderTags() {
    const { data: { tags } } = this.props;
    if (!tags || !tags.length) return null;
    return (
      <div className={styles.tagList}>
        {tags.map(tag => (
          <Chip
            key={tag}
            title={tag}
          />
        ))}
      </div>
    )
  }

  render() {
    const { data } = this.props;
    const { name, logo, original, translate } = data;

    return (
      <div className={styles.card}>
        <div className={styles.cardWrapper}>
          <CircleBadge
            large
            logo={logo}
            name={name}
          />
          <div className={styles.content}>
            <h1>{data.name}</h1>
            <div className={styles.link}>
              <a href={original} target="_blink">원본</a>
              <a href={translate} target="_blink">번역</a>
            </div>
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  }
}
