import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { NewsData } from '../utils/types';
import { Card, useTheme } from 'react-native-paper';
import { NavigationProp, Route } from '@react-navigation/native';

type props = {
    title: string
    image_url: string
    description: string
    content: string
}

const CardItem = (props:props) => {
    const theme = useTheme();
    return (
        <Pressable>
            <Card
                style= {{marginVertical:10, backgroundColor: theme.colors.elevation.level5}}
            >
                <Card.Cover borderRadius={10} source={{uri: props.image_url}}/>
                <Card.Title 
                    title= {props.title} 
                    subtitle= {props.description}
                    titleNumberOfLines={1}
                />
            </Card>
        </Pressable>
    )
}

const styles = StyleSheet.create({})

export default CardItem;