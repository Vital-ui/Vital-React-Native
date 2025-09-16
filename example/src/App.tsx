import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Carousel from './Carousel';
import Dashboard from "./Dashboard";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Carousel">
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Carousel" component={Carousel} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

