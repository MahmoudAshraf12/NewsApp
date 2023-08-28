import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SavedScreen from '../screens/SavedScreen';
import NewsOverview from '../screens/NewsOverview';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Saved" component={SavedScreen}/>
            </Tab.Navigator>
            <Stack.Screen name='NewsDetails' component={NewsOverview}/> 
        </NavigationContainer>
    )
}

export default AppNavigation;