import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import Dashboard from "./Dashboard";
import {NavigationContainer} from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={Dashboard}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

