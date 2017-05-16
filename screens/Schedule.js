import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ToggleButton from "../components/ToggleButton";

export default class Schedule extends React.Component {
  state = {
    selectedDay: "THURSDAY"
  };

  handlePressItem = item => {
    this.setState({ selectedDay: item });
  };

  render() {
    const { selectedDay } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/hero.png")}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.title}>React Europe Conference</Text>
          <ToggleButton
            items={["THURSDAY", "FRIDAY"]}
            value={selectedDay}
            onPressItem={this.handlePressItem}
          />
        </Image>
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
    paddingVertical: 30,
    height: null,
    width: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 46,
    height: 40,
    marginBottom: 10
  },
  title: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 24,
    marginBottom: 10
  }
});
