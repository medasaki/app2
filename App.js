import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Header } from 'react-native-elements'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Profile from './component/profile'

class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Form Profile', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
          <Profile />
      </View>
    );
  }
}


class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: App },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);
