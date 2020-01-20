import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Constants, Location, Permisions } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  }
});

class ClientMapLocation extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    latitude: null,
    longitude: null
  };

  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        this.setState({
            latitude,
            longitude
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  findCurrentLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if(status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied'
          });
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
  };

  render() {
      let text = '';
      if(this.state.errorMessage){
          text = this.state.errorMessage;
      } else if (this.state.location) {
          text = JSON.stringify(this.state.location);
      }
      return (
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={this.findCurrentLocation}>
              <Text> Where am I? </Text>
              <Text>{this.state.longitude}</Text>
              <Text>{this.state.latitude}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}

export default ClientMapLocation;
