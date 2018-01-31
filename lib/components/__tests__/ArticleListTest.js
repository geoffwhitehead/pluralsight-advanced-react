import React from 'react';
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';


describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    },
  };

  it('should render correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.node.props.children.length).toBe(2);
    expect(wrapper).toMatchSnapshot();

  });
});