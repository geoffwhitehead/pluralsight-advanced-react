import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  // create a container component

  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Component 
        {...this.props} 
        {...extraProps(this.context.store, this.props)}
        store={this.context.store} 
      />;
    }
  };
};

export default storeProvider;