//@ts-nocheck
import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Chip, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'react-native-paper';
import { API_KEY } from '../constants';
import { ComponentNavigationProp, NewsData } from '../utils/types';
import CardItem from '../components/CardItem';

const HomeScreen = (props: ComponentNavigationProp) => {
    const [newsData, setNewsData] = useState([])
    const [nextPage, setNextPage] = useState("")
    const theme = useTheme();
    const categories = ['Technology', 'Sports', 'Politics', 'Health','Business']
    const [selectedCategories, setSelectedCategories] = useState<NewsData[]>([]);
    const handleSelected = (val: string) => {
        setSelectedCategories((prev:string[]) =>
            prev.find((p) => p === val)?prev.filter((cat) => cat!== val) : [...prev, val]);
    }
    const handlePress = async() => {
        const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=gb&language=en${selectedCategories.length > 0 ? `&category=${selectedCategories.join()}`: ""}
        ${nextPage?.length > 0 ? `&page=${nextPage}`: ""}`
        try{
            await fetch(URL).then((res) => res.json())
            .then((data)=> {
                setNewsData((prev) => [...prev, ...data.results])
                setNextPage(data.nextPage)
            })
        }catch(err){
            console.log(err);
        }
    }
    // console.log(Object.keys(newsData[1]));
    
    return (
        <View style= {styles.container}>
            <View style= {styles.filtersContainer}>
                {
                    categories.map((cat) => (
                        <Chip 
                            key={cat} 
                            style= {styles.chipItem}
                            textStyle= {{fontWeight: '400', color: 'white', padding: 1}}
                            showSelectedOverlay
                            mode="outlined" 
                            selected= {selectedCategories.find((c) => cat===c) ? true: false}
                            onPress={()=>handleSelected(cat)}
                        >
                            {cat}
                        </Chip>))
                }
                <Button
                    mode='outlined'
                    style={styles.button}    
                    labelStyle={{fontSize:14, margin:'auto'}}
                    icon='sync'
                    onPress={handlePress}
                >
                    Refresh
                </Button>
            </View>
            <FlatList data={newsData} onEndReached={() => handlePress()} renderItem={({item}) => (
            <CardItem
                navigation={props.navigation}
                content={item.content}
                title={item.title}
                image_url={item.image_url}
                description={item.description}
                source_id={item.source_id}
            />)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 45, 
    },
    filtersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical:5
    },
    chipItem: {
        padding: 5,
        margin:5
    },
    button: {
        maxHeight:40,
        maxWidth:400,
        padding:5,
    }
})

export default HomeScreen;