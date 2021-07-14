import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Router from './src/Router/router'


const Tab = createMaterialTopTabNavigator();

export default function App() { 
  return (
    <Router/>
  )
}

