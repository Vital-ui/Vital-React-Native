import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Dashboard";
import Input from "./Input";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Input" component={Input} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

