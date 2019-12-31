import React, { Component } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';

class EventList extends Component {
  state = {
    events: []
  }

  componentDidMount() {
    const events = require('./db.json').events;
    this.setState({ events });
  }

  render() {
    return (
      <FlatList
          // data={[{name: 'a'},{name: 'b'}]}
          data={this.state.events}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
      />
    );
    }
  }

export default EventList;
