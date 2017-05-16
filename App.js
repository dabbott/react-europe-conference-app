import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EventDetails from './screens/EventDetails';
import Schedule from './screens/Schedule';
import FeedbackScreen from './screens/FeedbackScreen';
import { Ionicons } from '@expo/vector-icons';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

class ScheduleTabIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name="ios-calendar-outline"
        size={30}
        color={this.props.tintColor}
      />
    );
  }
}

class FeedbackTabIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name="ios-contacts-outline"
        size={30}
        color={this.props.tintColor}
      />
    );
  }
}

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#050B7A',
  },
  headerTintColor: '#fff',
};

const ScheduleStack = StackNavigator(
  {
    ScheduleList: { screen: Schedule },
    EventDetails: { screen: EventDetails },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: (props) => <ScheduleTabIcon {...props} />,
    },
  }
);

const FeedbackStack = StackNavigator(
  {
    FeedbackForm: { screen: FeedbackScreen },
  },
  {
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: (props) => <FeedbackTabIcon {...props} />,
    },
  }
);

const AppNavigation = TabNavigator(
  {
    Schedule: { screen: ScheduleStack },
    Feedback: { screen: FeedbackStack },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#fff',
        height: 55,
      },
      inactiveTintColor: '#888',
      activeTintColor: '#3454DA',
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
