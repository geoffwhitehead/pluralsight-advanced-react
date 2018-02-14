import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { pickBy } from 'lodash';
import Timestamp from './Timestamp';
// import Perf from 'react-addons-perf';

// if(typeof window !== 'undefined'){
//   window.Perf = Perf;

// }

export default class App extends React.PureComponent {

  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState);
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();

    // setImmediate(() => {
    //   Perf.start();
    // });
    // setTimeout(() => {
    //   Perf.stop();
    //   Perf.printWasted();
    // }, 5000);
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