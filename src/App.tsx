import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './slices';

import Routes from './routes/app.routes';
import './config/reactotron';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
