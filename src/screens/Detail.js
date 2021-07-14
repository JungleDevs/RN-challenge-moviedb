import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image, ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyle, theme } from '../globalStyle';
import RatedStars from '../components/ratedStars';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../services/api';
import CardMovie from '../components/CardMovie';
import Loading from '../components/Loading';
import '../../global'; //Global Values


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const movie = route.params.movie //Values from previous page
    const [movieDetail, setMovieDetail] = useState(null) //Values from detail of the movie selected
    const [movieRecom, setMovieRecom] = useState(null) //List of recommended movies for a movie selected.
    const [loading, setLoading] = useState(true) //Loadgin State


    //Load API information
    async function loadMoviesDetail() {
        const ApiDetail = `/movie/${movie.id}?api_key=${API_KEY}&language=${API_LANG}`
        await api.get(ApiDetail)
            .then(response => {
                console.log(response.data)
                setMovieDetail(response.data)
            }, error => {
                console.log(error)
            });



    }
//Load Recommended movies
    async function loadMoviesRecommends() {
        const ApiRecom = `/movie/${movie.id}/recommendations?api_key=${API_KEY}&language=${API_LANG}&page=1`
        await api.get(ApiRecom)
            .then(responseRecom => {
                console.log(responseRecom.data.results)
                setMovieRecom(responseRecom.data.results)
            }, error => {
                console.log(error)
            });
    }
//Get list of genres of movie selected
    function getMoviesGenres(genres) {
        let genresString = ''
        genres?.forEach(genre => {
            genresString += genre.name + ", "
        });
        return genresString

    }

    useEffect(() => {
        loadMoviesDetail();
        loadMoviesRecommends();
        setLoading(false)
    }, [])


    function CardMovieDetail() {
        return (
            <ScrollView style={styles.container}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` }} style={styles.capaDetail} />

                <TouchableOpacity style={styles.topBack} onPress={() => navigation.goBack()}><Icon name="arrow-back-outline" color={'#fff'} size={25} /></TouchableOpacity>

                <LinearGradient
                    style={styles.containerDetail}
                    end={[0, 0.2]}
                    colors={['transparent', theme.colors.BlackBase]}>

                    <Text style={globalStyle.title}>{movie.title}</Text>
                    <Text style={globalStyle.yearMovie}>{movie.release_date.substring(0, 4)} • {getMoviesGenres(movieDetail?.genres)} • {movieDetail?.runtime + ' mins'}</Text>
                    <Text style={styles.overviewMovie}>{movie.overview}</Text>
                    <RatedStars valueRated={movie.vote_average} />
                    <View>
                        <Text style={styles.subtitle}>Also trending</Text>
                        <FlatList
                            data={movieRecom}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => String(item.id)}
                            initialNumToRender={5}
                            renderItem={({ item }) => (
                                <CardMovie
                                    title={item.title}
                                    genre_ids={item.genre_ids}
                                    release_date={item.release_date}
                                    vote_average={item.vote_average}
                                    poster_path={item.poster_path}
                                    movie={item} />
                            )}
                        />
                    </View>
                </LinearGradient>
            </ScrollView>
        )
    }
    if (loading == true) {
        return <Loading />;
    }
    else {
        return <CardMovieDetail />
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 1200,
        backgroundColor: theme.colors.BlackBase,
        paddingTop: StatusBar.currentHeight - 20
    },
    capaDetail: {
        width: '100%',
        height: 500,
        opacity: 0.5
    },
    containerDetail: {
        marginTop: -200,
        paddingTop: 50,
        paddingLeft: 60,
        paddingRight: 30,
        height: 200
    },
    topBack: {
        position: 'absolute',
        marginTop: 40,
        marginLeft: 20,
        padding: 20
    },
    overviewMovie: {
        paddingVertical: 15,
        color: '#FFF'
    },
    subtitle: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 15,
        color: 'white',
    }
})
