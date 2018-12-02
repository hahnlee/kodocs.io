import React, { Component } from 'react';
import _ from 'lodash';

import openInNew from '../../images/open-in-new.svg';

import styles from './ProjectMeta.module.scss';


export class ProjectMeta extends Component {
  static LIST = [
    { key: 'original', title: '원본' },
    { key: 'homepage', title: '홈페이지' },
    { key: 'translate', title: '번역' },
    { key: 'repository.url', title: '저장소' },
  ];

  renderItems() {
    const { data } = this.props;

    return ProjectMeta.LIST.map((meta) => {
      const projectData = _.get(data, meta.key);
      if (!projectData) return null;
      return (
        <div key={meta.key} className={styles.item}>
          <h1>{meta.title}</h1>
          <a href={projectData} target="_blink">
            <img src={openInNew} alt={meta.title} />
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.projectMeta}>
        {this.renderItems()}
      </div>
    );
  }
}
