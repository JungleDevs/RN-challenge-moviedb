import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import TopMovies from '../screens/TopMovies'  //List Movies Screen
import Detail from '../screens/Detail' //Screen Detail 

export default function Router() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="TopMovies" headerMode="none">
            <Stack.Screen name="TopMovies" component={TopMovies} />
            <Stack.Screen name="Detail" component={Detail} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   NavigationContainer:{
      backgroundColor:'#070818'
   }
})
