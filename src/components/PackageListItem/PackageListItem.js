import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Chip } from '../Chip';
import { CircleBadge } from '../CircleBadge';

import styles from './PackageListItem.module.scss';


export class PackageListItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      logo: PropTypes.string,
      color: PropTypes.string,
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
    const { data } = this.props;
    const { tags } = data;

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
    const { name, logo, fields, color } = data;

    return (
      <Link className={styles.packageListItem} to={`/project/${fields.slug}`}>
        <CircleBadge
          logo={logo}
          name={name}
          color={color}
        />
        <div className={styles.content}>
          <h1>{data.name}</h1>
          {this.renderTags()}
        </div>
      </Link>
    );
  }
}
