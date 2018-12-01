import React, { Component } from 'react';
import { Link } from 'gatsby';

import { Chip, CircleBadge, Page, SideBar, ProjectInfo } from '../components';


class Project extends Component {
  state = {
    isLoading: true,
    data: '',
    error: '',
  };

  renderContent() {
    const { isLoading, error, data } = this.state;
    if (isLoading || error) return null;
    return (
      <div dangerouslySetInnerHTML={{ __html: data }} />
    );
  }

  renderTag() {
    const { pageContext: { node } } = this.props;
    const { tags } = node;

    if (!tags || !tags.length) return null;
    return (
      <div>
        {tags.map(tag => (
          <Chip key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </Chip>
        ))}
      </div>
    );
  }

  render() {
    const { pageContext: { node } } = this.props;
    const { logo, name, color, repository } = node;

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
        <ProjectInfo repository={repository} />
      </Page>
    );
  }
}

export default Project;
