import React from "react";
import { Constants } from "expo";
import {
  TextInput,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Animated,
  AsyncStorage
} from "react-native";
import GrowingTextInput from "../components/GrowingTextInput";
import Swipeable from "../components/Swipeable";
import Modal from "react-native-root-modal";

const calculateOpacity = x => Math.max(0, 100 - Math.abs(x)) / 100;

const NAME_FIELD_KEY = "NAME_FIELD_KEY";

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    title: "Feedback"
  };

  state = {
    modalVisible: false,
    modalOpacity: new Animated.Value(0),
    name: ""
  };

  componentWillMount = async () => {
    try {
      const name = await AsyncStorage.getItem(NAME_FIELD_KEY);
      if (name !== null) {
        this.setState({ name });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    const { modalVisible, modalOpacity } = this.state;

    // if (!this.state.name) {
    //   return <ActivityIndicator />
    // }

    return (
      <View style={{ flex: 1 }}>
        <Modal
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center"
          }}
          visible={modalVisible}
        >
          <Animated.View
            style={{
              opacity: modalOpacity,
              backgroundColor: "rgba(0,0,0,0.5)",
              ...StyleSheet.absoluteFillObject
            }}
          />
          <Swipeable
            onMove={({ x }) => {
              let newOpacity = calculateOpacity(x);

              modalOpacity.setValue(newOpacity);
            }}
            onEnd={({ x }) => {
              let newOpacity = calculateOpacity(x);

              if (newOpacity < 0.1) {
                this.setState({ modalVisible: false });
                modalOpacity.setValue(0);
              } else {
                Animated.spring(modalOpacity, { toValue: 1 }).start();
              }
            }}
          >
            <Animated.View
              style={{
                opacity: modalOpacity,
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
                padding: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ marginBottom: 15 }}>
                Do you want to autofill your contact info from Facebook?
              </Text>
              <Button
                title={"Login to Facebook"}
                onPress={() => this.setState({ modalVisible: false })}
              />
              <Text style={{ marginTop: 15 }}>No thanks!</Text>
            </Animated.View>
          </Swipeable>
        </Modal>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingTop: 30 }}
          style={{ flex: 1, backgroundColor: "#F8F8F9" }}
        >
          <Button
            title={"Autofill contact info"}
            onPress={() => {
              const { modalOpacity } = this.state;

              Animated.spring(modalOpacity, { toValue: 1 }).start();
              this.setState({ modalVisible: true });
            }}
          />
          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder="Full name"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textInput}
              onSubmitEditing={async () => {
                try {
                  await AsyncStorage.setItem(NAME_FIELD_KEY, this.state.name);

                  console.log(this.state.name);
                } catch (e) {
                  console.log("error saving", this.state.name);
                }

                this._emailInput.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={view => {
                this._emailInput = view;
              }}
              onSubmitEditing={() => {
                this._phoneNumber.focus();
              }}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              style={styles.textInput}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={view => {
                this._phoneNumber = view;
              }}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              style={styles.textInput}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this._feedbackInput.focus();
              }}
            />
          </View>

          <View style={styles.row}>
            <GrowingTextInput
              minHeight={80}
              ref={view => {
                this._feedbackInput = view;
              }}
              style={styles.growingTextInput}
              placeholder="Please write at least two or three sentences to share your feedback with us."
              blurOnSubmit={false}
            />
          </View>

        </ScrollView>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  titleText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  },
  row: {
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc"
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccc"
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15
  },
  growingTextInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 15
  }
});
