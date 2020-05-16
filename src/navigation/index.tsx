import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TryOnScreen from '../screens/TryOn';
import CatalogScreen from '../screens/Catalog';
import CartScreen from '../screens/Cart';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Try On') {
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
                    activeTintColor: '#27ae60',
                    inactiveTintColor: '#95a5a6',
                }}
            >
                <Tab.Screen name="Try On" component={TryOnScreen} />
                <Tab.Screen name="Catalog" component={CatalogScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}