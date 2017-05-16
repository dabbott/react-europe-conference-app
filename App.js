import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EventDetails from "./screens/EventDetails";
import Schedule from "./screens/Schedule";
import FeedbackScreen from "./screens/FeedbackScreen";

import { StackNavigator } from 'react-navigation';

const ScheduleStack = StackNavigator({
  ScheduleList: { screen: Schedule },
  EventDetails: { screen: EventDetails }
}, {
  headerMode: 'screen',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScheduleStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
