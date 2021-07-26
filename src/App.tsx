import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import { store } from './slices';

import Routes from './routes/app.routes';
import './config/reactotron';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#070818" barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
