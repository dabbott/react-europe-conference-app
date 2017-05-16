import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/hero.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    height: 200,
    width: null
  }
});
