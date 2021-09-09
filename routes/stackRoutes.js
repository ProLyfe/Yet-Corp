import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Home: {
        screen: Home
    }
};

const stackRoute = createStackNavigator(screens);
export default createAppContainer(stackRoute);