import { createStackNavigator } from '@react-navigation/stack';


export default function () {
    const Stack = createStackNavigator();

    return (<>
        <Stack.Navigator
            initialRouteName='Apresentacao'
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name = "Apresentacao" component = {() => void}/>
            <Stack.Screen name = "Login" component={() => void}/>
            <Stack.Screen name = "Home" component={() => void}/>

        </Stack.Navigator>
    </>);
}