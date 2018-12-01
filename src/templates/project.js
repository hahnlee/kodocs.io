import React, { Component } from 'react';

import { Chip, CircleBadge, Page, SideBar } from '../components';


class Project extends Component {
  renderTag() {
    const { pageContext: { node } } = this.props;
    const { tags } = node;

    if (!tags || !tags.length) return null;
    return (
      <div>
        {tags.map(tag => (
          <Chip
            key={tag}
            title={tag}
          />
        ))}
      </div>
    );
  }

  render() {
    const { pageContext: { node } } = this.props;
    const { logo, name, color } = node;

    return (
      <Page title={name}>
        <SideBar>
          <CircleBadge
            large
            logo={logo}
            name={name}
            color={color}
          />
          <h1>{name}</h1>
          {this.renderTag()}
        </SideBar>
      </Page>
    );
  }
}

export default Project;
