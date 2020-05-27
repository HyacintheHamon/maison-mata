import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Help } from '../assets/svg';

import TryOnScreen from '../screens/TryOn';
import BotttomSheet from '../screens/BottomSheet';
import Home from '../screens/Home';
import CatalogScreen from '../screens/Catalog';
import CartScreen from '../screens/Cart';
import AccountScreen from '../screens/Account';
import SplashScreen from '../screens/Splashcreen';
import DeviceInfo from '../screens/DeviceInfo';
import MapScreen from '../screens/Map'
import SwatchTestScreen from '../screens/SwatchTest'
import FaceDetection from '../screens/FaceDetection'
import GlassesTest from '../screens/GlassesTest'
import ARTest from '../screens/ARTest'
import ProductDetail from '../screens/ProductDetail'
import ARKitScreen from '../screens/ARKit'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-glasses'
                            : 'ios-glasses';
                    } else if (route.name === 'Catalog') {
                        iconName = focused ? 'ios-book' : 'ios-book';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'ios-cart' : 'ios-cart';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'ios-person' : 'ios-person';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#28CE7A',
                inactiveTintColor: '#95a5a6',
            }}
        >
            <Tab.Screen name="Home" component={TryOnScreen} />
            <Tab.Screen name="Catalog" component={CatalogScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splashscreen"
                headerMode="screen"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetail}
                />
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{
                        headerRight: () => (
                            <Help style={{ marginRight: 10 }} />
                        ),
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}