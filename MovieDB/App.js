import React from 'react';
import {Provider} from 'react-redux';

import Trending from './src/pages/Home';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Trending />
    </Provider>
  );
};

export default App;
