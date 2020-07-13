import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Dashboard from './Containers/Dashboard';
import Help from './Containers/Help';
import Kvkk from './Containers/Kvkk';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Kvkk" component={Kvkk} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;