import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class EventDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Conference Keynote</Text>
          <Text style={styles.subtitle}>Thursday, May 18</Text>
          <Text style={styles.description}>Hear about awesome stuff</Text>
        </View>
        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{ uri: "http://unsplash.it/40/40" }}
          />
          <View style={styles.speakerDetailsContainer}>
            <Text style={styles.speakerName}>Lucy Vatne</Text>
            <Text style={styles.speakerBio}>The best doggo</Text>
          </View>
        </View>
      </View>
    );
  }
}

const IMAGE_SIZE = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "black"
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12
  },
  description: {
    fontSize: 13
  },
  speakerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: "grey",
    marginRight: 10
  },
  speakerDetailsContainer: {
    justifyContent: "center"
  },
  speakerName: {
    color: "purple",
    fontSize: 18,
    fontWeight: "500"
  },
  speakerBio: {
    fontSize: 13
  }
});
