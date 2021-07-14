import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { globalStyle, theme } from '../globalStyle'
import { useNavigation } from '@react-navigation/native'

import RatedStars from './ratedStars';

export default function CardMovie({ title, genre_ids, release_date, vote_average, poster_path, movie }) {
    const navigation = useNavigation();

//Get the movie ID to send the Details page
function navigateToDetail(movie) {
   navigation.navigate('Detail', { movie })
}


   return (
      <TouchableOpacity style={globalStyle.containerCard} onPress={() => navigateToDetail(movie)}>
         <Image source={{ uri: `https://image.tmdb.org/t/p/w342${poster_path}` }} style={globalStyle.Capa} />
         <View style={globalStyle.containerMovie}>
            <View>
               <Text style={globalStyle.titleMovie}>{title}</Text>
               <Text style={globalStyle.genreMovie}>{genre_ids}</Text>
               <Text style={globalStyle.yearMovie}>{release_date.substring(0, 4)}</Text>
            </View>
            <RatedStars valueRated={vote_average} />
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({})
