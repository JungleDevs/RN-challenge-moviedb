import React from 'react';

import Trending from '../pages/Home';

describe('Home page', () => {
  test('Snapshot', () => {
    const render = render(<Trending />).toJSON();
    expect(render).toMatchSnapshot();
  });
});
