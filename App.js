import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import EventDetails from "./screens/EventDetails";
import Schedule from "./screens/Schedule";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Schedule />
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
