import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Page, PackageList, PackageListItem } from '../components';


class Tag extends Component {
  render() {
    const { pageContext: { fieldValue }, data: { allDataJson: { edges } } } = this.props;
    console.log(this.props);

    return (
      <Page title={fieldValue}>
        <h1 style={{ textAlign: 'center' }}>Tag: {fieldValue}</h1>
        <PackageList>
          {edges.map(({ node }) => (
            <PackageListItem
              key={node.name}
              data={node}
            />
          ))}
        </PackageList>
      </Page>
    );
  }
}

export default Tag;

export const query = graphql`
query($fieldValue: String) {
  allDataJson(filter: { tags: { in: [$fieldValue] } }) {
    edges {
      node {
        name
        tags
        logo
        color
        fields {
          slug
        }
      }
    }
  }
}
`;
