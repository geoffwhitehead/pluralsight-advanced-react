import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {
  // create a container component

  const WithStore  = (props, {store}) => {
    <Component { ...props} store={store}/>;

    WithStore.contextTypes = {
      store: PropTypes.object
    };

    return WithStore;
  } ;

};

export default storeProvider;