import React, { Component } from 'react';
import gh from 'github-url-to-object';
import octokit from '@octokit/rest';
import Spinkit from 'react-spinkit';

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
    const { isLoading, data, error } = this.state;

    if (!repository || !repository.url) {
      return (
        <div className={styles.messageWrapper}>
          <h1>아직 GitHub ReadMe 정보가 없습니다 :(</h1>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.spinnerWrapper}>
          <Spinkit name="folding-cube" fadeIn="none" color="#8956FF" />
        </div>
      );
    }

    if (error) {
      return (
        <div className={styles.messageWrapper}>
          <h1>GitHub ReadMe 정보를 가져오지 못했습니다 :(</h1>
        </div>
      );
    }

    return (
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: data }} />
    );
  }

  render() {
    return (
      <div className={styles.readMe}>
        {this.renderContent()}
      </div>
    );
  }
}
