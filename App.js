import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EventDetails from "./screens/EventDetails";
import Schedule from "./screens/Schedule";
import FeedbackScreen from "./screens/FeedbackScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FeedbackScreen />
        {/*<Schedule />*/}
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
