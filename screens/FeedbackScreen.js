import React from 'react';
import { Constants } from 'expo';
import {
  TextInput,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import GrowingTextInput from '../components/GrowingTextInput';

export default class FeedbackScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingTop: 65 + 30 }}
          style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder="Full name"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textInput}
              onSubmitEditing={() => { this._emailInput.focus() }}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={view => { this._emailInput = view; }}
              onSubmitEditing={() => { this._phoneNumber.focus() }}
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              style={styles.textInput}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              ref={view => { this._phoneNumber = view; }}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              style={styles.textInput}
              returnKeyType="next"
              onSubmitEditing={() => { this._feedbackInput.focus() }}
            />
          </View>

          <View style={styles.row}>
            <GrowingTextInput
              minHeight={80}
              ref={view => { this._feedbackInput = view; }}
              style={styles.growingTextInput}
              placeholder="Please write at least two or three sentences to share your feedback with us."
            />
          </View>


        </ScrollView>

        <View style={styles.navbar}>
          <Text style={styles.titleText}>Feedback</Text>
        </View>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#050B7A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
  },
  growingTextInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 15,
  }
});
