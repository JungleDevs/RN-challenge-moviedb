import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle, theme } from '../globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';


//Movie Rating Stars

export default function ratedStars({ valueRated }) {
    return (
        <View style={styles.containerRate}>
            <Icon name="star" color={theme.colors.Yellow} size={15} />
            <Icon name="star" color={theme.colors.Yellow} size={15} />
            <Icon name="star" color={theme.colors.Yellow} size={15} />
            <Icon name="star" color={theme.colors.Yellow} size={15} />
            <Icon name="star-outline" color={theme.colors.Yellow} size={15} />
            <Text style={styles.textRated}>{valueRated}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRate: {
        width: 130,
        backgroundColor: '#252634',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 2,
        borderRadius: 5
    },
    textRated: {
        fontSize: 15,
        color: '#FFF',
    }
})
