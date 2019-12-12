import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './pages/Login';
import Main from './pages/Main';
import Review from './pages/Review';
import Aspects from './pages/Aspects';
import Impacts from './pages/Impacts';
import Questions from './pages/Questions';
import Result from './pages/Result';

const entry = createSwitchNavigator({ Login, Main });

const home = createBottomTabNavigator(
  {
    Aspects,
    Impacts,
    Questions,
    Result,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        // eslint-disable-next-line no-param-reassign
        if (routeName === 'Aspects') {
          return (
            <IconComponent name="ios-clipboard" size={25} color={tintColor} />
          );
        }
        if (routeName === 'Impacts') {
          return <IconComponent name="ios-flash" size={25} color={tintColor} />;
        }
        if (routeName === 'Questions') {
          return <IconComponent name="md-help" size={25} color={tintColor} />;
        }
        if (routeName === 'Result') {
          return (
            <IconComponent name="md-list-box" size={25} color={tintColor} />
          );
        }

        return <IconComponent name="md-help" size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00ca14',
      inactiveTintColor: 'gray',
      style: { backgroundColor: '#eee' },
    },
  }
);

const AppNavigator = createSwitchNavigator({
  home,
  entry,
});

const routes = createAppContainer(AppNavigator);

export default routes;
