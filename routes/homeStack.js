import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Gamezone',
            // headerStyle: {
            //     backgroundColor: '#eee'
            // }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle: {
            //     backgroundColor: '#eee'
            // }
        }
    },

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { 
            backgroundColor: '#eee',
            height: 100
        
        }
    }
});

export default createAppContainer(HomeStack);