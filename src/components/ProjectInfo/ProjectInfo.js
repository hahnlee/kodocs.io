import React, { Component } from 'react';
import classNames from 'classnames';

import { ReadMe } from '../ReadMe';

import styles from './ProjectInfo.module.scss';


export class ProjectInfo extends Component {
  static MENU_KEYS = {
    READ_ME: 'READ_ME',
    VERSIONS: 'VERSION',
  };

  static MENU_ITEMS = [
    { key: ProjectInfo.MENU_KEYS.READ_ME, title: 'Read Me' },
    { key: ProjectInfo.MENU_KEYS.VERSIONS, title: 'Versions' },
  ];

  state = {
    selectedItem: ProjectInfo.MENU_ITEMS[0],
  };

  renderMenuItem() {
    const { selectedItem } = this.state;

    return (
      <div className={styles.menu}>
        {ProjectInfo.MENU_ITEMS.map(menu => (
          <div
            key={menu.key}
            className={classNames(
              styles.menuItem,
              { [styles.selected]: menu === selectedItem },
            )}
            onClick={() => this.setState({ selectedItem: menu })}
          >
            {menu.title}
          </div>
        ))}
      </div>
    );
  }

  renderContent() {
    const { selectedItem } = this.state;
    const { repository } = this.props;

    switch (selectedItem.key) {
      default:
        return (
          <ReadMe repository={repository} />
        );
    }
  }

  render() {
    return (
      <div className={styles.projectInfo}>
        {this.renderMenuItem()}
        {this.renderContent()}
      </div>
    );
  }
}
