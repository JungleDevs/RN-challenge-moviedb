import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {Store} from './src/store/store';

import NavigationPages from './src/components/BottomTabNavigator';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <NavigationContainer>
          <NavigationPages />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
