
import React from 'react';
import { Image } from 'react-native'

// Navigators
import { createDrawerNavigator, createStackNavigator, TabBarBottom, createBottomTabNavigator, createAppContainer } from 'react-navigation'

// StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

// TabNavigator screens
import Dashboard from './Dashboard'
import Today from './Toady'
import Historical from './Historical'
import Technical from './Technical'

// Plain old component
import Plain from './Plain'

import Splash from './Splash'
import Login from './Login'

import SideMenu from './components/SideMenu'




const Stack = createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
    initialRouteName: 'ItemList',
  })

const Tabs = createBottomTabNavigator({
  Dashboard: { screen: Dashboard },
  Today: { screen: Today },
  Historical: { screen: Stack },
  Technical: { screen: Technical },

}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {

          case 'Dashboard':
            iconName = require('./assets/icons/dashboard.png');
            iconNameFocused = require('./assets/icons/dashboard.png');
            break;

          case 'Today':
            iconName = require('./assets/icons/today.png');
            iconNameFocused = require('./assets/icons/today.png');
            break;

          case 'Historical':
            iconName = require('./assets/icons/graph.png');
            iconNameFocused = require('./assets/icons/graph.png');
            break;

          case 'Technical':
            iconName = require('./assets/icons/data.png');
            iconNameFocused = require('./assets/icons/data.png');
            break;

        }

        if (focused)
          return (<Image style={{ marginTop: 7, width: 25, height: 25, tintColor }} source={iconNameFocused} />);
        else
          return (<Image style={{ marginTop: 7, width: 25, height: 25, tintColor }} source={iconName} />);
      }

    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FF7A0B',
      inactiveTintColor: '#333333',
      labelStyle: { padding: 5, fontSize: 10, fontWeight: '200' },
      style: { height: 65, backgroundColor: '#FFFFFF' },
      tabStyle: { paddingVertical: 0, borderRightWidth: 1, borderRightColor: '#eaeaea' },
      indicatorStyle: { borderBottomColor: '#FF7A0B', borderBottomWidth: 3 }
    },
    animationEnabled: true,
    swipeEnabled: true,
  })


const Drawer = createDrawerNavigator(
  {
    // Stack: { screen: Stack },
    Tabs: { screen: Tabs },
    Plain: { screen: Plain },
    Drawer: { screen: SideMenu, navigationOptions: { tabBarVisible: false } },
  }, {
    contentComponent: SideMenu,
    initialRouteName: Tabs,
    animationEnabled: true,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)

export const DashboardContainer = createAppContainer(Drawer);


const LoginStack = createStackNavigator({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Drawer: { screen: Drawer },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export const LoginContainer = createAppContainer(LoginStack);


