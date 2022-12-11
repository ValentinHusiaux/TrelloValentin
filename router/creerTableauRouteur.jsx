import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from '../vues/accueil';
import Accueil2 from '../vues/accueil2';

// import { TableauListRouter } from './tableauListRouter';
//  import { Register } from '../vues/register';



const Stack = createStackNavigator();

export function CreerTableauRouteur() {

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen name="tableauListRouter" options={{title:'Tableaux List'}} component={TableauListRouter} /> */}
              <Stack.Screen name="creerTableauRouteur" options={{title:'Creer un tableau '}} component={CreerTableauRouteur} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}