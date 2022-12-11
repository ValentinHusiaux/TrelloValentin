import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from '../vues/accueil';
import Accueil2 from '../vues/accueil2';

// import { TableauListRouter } from './tableauListRouter';
//  import { Register } from '../vues/register';



const Stack = createStackNavigator();

export function TableauRouter() {

    return (
        
        <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen name="tableauListRouter" options={{title:'Tableaux List'}} component={TableauListRouter} /> */}
              <Stack.Screen name="tableauListRouter" options={{title:'Listes de mes tableaux'}} component={Accueil} />
              <Stack.Screen name="listTableaux" options={{title:'listTableaux '}} component={Accueil2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}