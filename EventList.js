import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard from './EventCard';
import { getEvents } from './api';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

class EventList extends Component {
  static navigationOptions = {
     title: 'Your Events',
   };

  state = {
    events: []
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    this.props.navigation.addListener(
      'didFocus',
      () => {
    getEvents().then(events => this.setState({ events }));
      }
    );

    // const events = require('./db.json').events.map(e => ({
    //   ...e,
    //   date: new Date(e.date),
    // }));
    // this.setState({ events });
  }

  // componentDidUpdate() {
  //     this._updateComponent;
  // }

  _updateComponent = (e) => {
      console.log("hello you made it into _updateComponent!");
      getEvents().then(events => this.setState({ events }));
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }

  handleLocationNav = () => {
    this.props.navigation.navigate('location');
  }

  render() {
    return [
      <FlatList
          // style={styles.list}
          // // data={[{name: 'a'},{name: 'b'}]}
          // data={this.state.events}
          // //renderItem={({ item }) => <Text>{item.title}</Text>}
          // renderItem={({ item }) => <EventCard event={item} />}
          // keyExtractor={item => item.id}
          key="flatlist"
          data={this.state.events}
          style={styles.list}
          keyExtractor={item => item.id}
          renderItem={({ item, separators }) => (
            <EventCard
              event={item}
              />
            )}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231,76,60,1)"
      />,
      <Button
        title="Your Location"
        onPress={this.handleLocationNav}
        buttonColor="rgba(231,76,77,1)"
      />
    ];
    }
  }

export default EventList;
