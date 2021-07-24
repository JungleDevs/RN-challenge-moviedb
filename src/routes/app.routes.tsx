import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Trending, Details } from '../screens';
import home from '../assets/icons/home.png';
import trending from '../assets/icons/trending.png';
import trailers from '../assets/icons/trailers.png';
import statistics from '../assets/icons/statistics.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Trending"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;
          switch (route.name) {
            case 'Home':
              icon = home;
              break;
            case 'Trending':
              icon = trending;
              break;
            case 'Trailers':
              icon = trailers;
              break;
            case 'Statistics':
              icon = statistics;
              break;
            default:
              break;
          }
          return (
            <Image
              source={icon}
              style={{ height: 22, width: 22, tintColor: color }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1F8CFF',
        inactiveTintColor: '#CDCED1',
        showLabel: false,
        style: {
          backgroundColor: '#1B1C2A',
        },
      }}
    >
      <Tab.Screen name="Home" component={Trending} />
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Trailers" component={Trending} />
      <Tab.Screen name="Statistics" component={Trending} />
    </Tab.Navigator>
  );
};

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#070818' },
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
