import React from 'react';
import {
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import ToggleButton from '../components/ToggleButton';

const thursdaySections = [
  {
    key: '8:30 AM',
    data: [{ key: 0, title: 'Registration, breakfast' }],
  },
  {
    key: '10:00 AM',
    data: [{ key: 0, title: 'Conference Keynote', speaker: 'Lucy Vatne' }],
  },
];

const extractKey = ({ id }) => id;

const fridaySections = [
  {
    key: '10:30 AM',
    data: [{ key: 0, title: 'More breakfast' }],
  },
  {
    key: '12:00 PM',
    data: [{ key: 0, title: 'More Keynote', speaker: 'Lucy Vatne' }],
  },
];

export default class Schedule extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    selectedDay: 'THURSDAY',
  };

  handlePressItem = item => {
    this.setState({ selectedDay: item });
  };

  _handlePressRow = (item) => {
    this.props.navigation.navigate('EventDetails', {})
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.row}
        key={item.key}
        onPress={() => this._handlePressRow(item)}>
        <Text style={styles.rowTitle}>{item.title}</Text>
        <Text style={styles.rowSpeaker}>{item.speaker}</Text>
      </TouchableOpacity>
    );
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.key}</Text>
      </View>
    );
  };

  render() {
    const { selectedDay } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/hero.png')}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>React Europe Conference</Text>
          <ToggleButton
            items={['THURSDAY', 'FRIDAY']}
            value={selectedDay}
            onPressItem={this.handlePressItem}
          />
        </Image>
        <SectionList
          style={styles.list}
          sections={
            selectedDay === 'THURSDAY' ? thursdaySections : fridaySections
          }
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  sectionHeaderText: {
    fontSize: 13,
  },
  row: {
    backgroundColor: 'white',
    padding: 20,
  },
  rowTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  rowSpeaker: {
    fontSize: 13,
  },
  image: {
    paddingVertical: 30,
    height: null,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 46,
    height: 40,
    marginBottom: 10,
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
});
