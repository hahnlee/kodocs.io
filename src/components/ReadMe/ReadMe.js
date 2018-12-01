import React, { Component } from 'react';
import gh from 'github-url-to-object';
import octokit from '@octokit/rest';

import 'github-markdown-css';

import styles from './ReadMe.module.scss';


export class ReadMe extends Component {
  state = {
    isLoading: true,
    data: null,
    error: null,
  };

  componentDidMount() {
    const { repository } = this.props;
    if (repository && repository.url) {
      this.fetchReadMe();
    }
  }

  fetchReadMe() {
    const { repository } = this.props;
    const { user: owner, repo } = gh(repository.url);
    const github = octokit({});

    const opts = {
      owner,
      repo,
      headers: {
        Accept: 'application/vnd.github.v3.html',
      },
    };

    github.repos.getReadme(opts)
      .then(({ data }) => this.setState({
        isLoading: false,
        data,
      }))
      .catch(error => this.setState({
        isLoading: false,
        error,
      }));
  }

  renderContent() {
    const { repository } = this.props;
    const { data } = this.state;

    if (!repository || !repository.url) {
      return (
        <div>
          :(
        </div>
      );
    }

    if (data) {
      return (
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data }} />
      );
    }

    return null;
  }

  render() {
    return (
      <div className={styles.readMe}>
        {this.renderContent()}
      </div>
    );
  }
}
