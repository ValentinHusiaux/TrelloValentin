import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Connect } from '../vues/connect';
import { Register } from '../vues/register';
import { stylesNav } from "../styles/navigation";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {
    return (
        <NavigationContainer style={stylesNav.container}>
            <Tab.Navigator>
                <Tab.Screen style={stylesNav.toc} name="Connection" component={Connect} />
                <Tab.Screen style={stylesNav.toc} name="S'inscrire" component={Register} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}