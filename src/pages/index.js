import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';

import { Page, PackageList, PackageListItem } from '../components';


class IndexPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allDataJson: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string),
            color: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        })).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { data: { allDataJson: { edges } } } = this.props;

    return (
      <Page>
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

export default IndexPage;

export const query = graphql`
{
  allDataJson {
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
