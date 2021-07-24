import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Homeimage from '../../../src/icons/home.png';
import FilmImage from '../../../src/icons/film-xxl.png';
import Trophy from '../../../src/icons/trophy.png';
import Statistics from '../../../src/icons/statistics-xxl.png';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Icons from 'react-native-vector-icons/Ionicons';

import Home from '../../pages/Home';
import Trending from '../../pages/Trending';
import TopMovies from '../../pages/TopMovies';
import SearchBy from '../../pages/SearchBy';

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    backgroundColor: '#1B1C2A',
    height: 56,
    elevation: 2,
  },
  icon: {
    height: 20,
    width: 18,
    left: 3,
    top: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

const NavigationPages = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          ...styles.menu,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={Homeimage} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TopMovies"
        component={TopMovies}
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={Trophy} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen name="SearchBy" component={SearchBy} />
      <Tab.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: () => (
            <View>
              <Image source={Statistics} style={styles.icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationPages;
