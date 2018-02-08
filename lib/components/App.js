import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { pickBy } from 'lodash';
import Timestamp from './Timestamp';

export default class App extends Component {

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillMount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRegularExpression = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRegularExpression)
          || value.body.match(searchRegularExpression);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}