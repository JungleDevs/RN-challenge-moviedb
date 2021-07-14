import { StyleSheet, StatusBar } from 'react-native';



export const globalStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#070818',
        paddingTop: StatusBar.currentHeight + 20
    },
    containerSecundary: {
        flex: 3,
    },
    title: {
        fontSize: '1.8rem',
        lineHeight: 48,
        fontWeight: 'bold',
        color: '#FFF',
    },
    inputSearch: {
        color: '#fff',
        marginRight: 5
    },
    Capa: {
        width: '40%',
        height: '100%',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    containerCard: {
        height: 160,
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#1B1C2A',
        borderRadius: 8,
    },
    containerCard1: {
        height: 160,
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#007CFF',
        borderRadius: 8,
    },
    containerMovie: {
        width: '50%',
        margin: 15,
        justifyContent: 'space-between'
    },
    titleMovie: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    genreMovie: {
        fontSize: 12,
        color: '#FFF',
    },
    yearMovie: {
        fontSize: 12,
        color: '#FFF',
    },
    tabar: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#1B1C2A',
    }
})

//Color palette
export const theme = {
    colors: {
        BlueBase: '#007CFF',
        BlueLight: '#1F8CFF',
        BlueLightest: '#CCE5FF',
        BlackBase: '#070818',
        GrayBase: '#1B1C2A',
        GrayLight: '#252634',
        GrayLightest: '#CDCED1',
        Yellow: '#FFB825'
    }
}