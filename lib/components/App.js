import React, { Component } from 'react';
import ArticleList from './ArticleList';
import DataApi from 'DataApi';
import { data } from 'testData';

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    console.log(this.state);
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <ArticleList 
        articles={articles}
        articleActions={this.articleActions}
      />
    );
  }
}