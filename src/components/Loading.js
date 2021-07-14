import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../globalStyle'

export default function Loading() {
   
   return (
      <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
         <Text style={globalStyle.title}>Carregando...</Text>
      </View>
   )
}

const styles = StyleSheet.create({})
