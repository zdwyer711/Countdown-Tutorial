import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import { formatDateTime } from './api';
import DateTimePicker from 'react-native-modal-datetime-picker';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
   height: 50,
   backgroundColor: '#48BBEC',
   borderColor: '#48BBEC',
   alignSelf: 'stretch',
   margin: 10,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 5,
 },
 buttonText: {
   color: '#fff',
   fontSize: 18,
 },
 borderTop: {
   borderColor: '#edeeef',
   borderTopWidth: 0
 }
});

class EventForm extends Component {
state = {
  title: null,
  date: '',
}

  handleAddPress = () => {
    console.log(this.state);
    this.props.navigation.navigate('list');
  }

  handleChangeTitle = (value) => {
    this.setState({ title: value});
  }

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  }

  handleDatePicked = (date) => {
    this.setState({
      date,
    });

    this.handleDatePickerHide();
  }

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false})
  }


  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
          <TextInput
            style={[styles.text,styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight
          onPress={this.handleAddPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
