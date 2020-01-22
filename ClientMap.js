import MapView from 'react-native-maps';
// import React, { Component } from 'react';
// import { Text, StyleSheet, Button, Dimensions } from 'react-native';
// import { Constants, Location, Permisions } from 'expo';
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions  } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class ClientMap extends Component {
    state = {
      location: null,
      errorMessage: null,
    };

  componentWillMount() {
   if (Platform.OS === 'android' && !Constants.isDevice) {
     this.setState({
       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
     });
    } else {
     this._getLocationAsync();
    }
  }

 _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       errorMessage: 'Permission to access location was denied',
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   console.log(location);
   console.log("==========================");
   console.log(location['coords']);
   console.log("==========================");
   console.log("latitude:" + location['coords']['latitude']);
   console.log("==========================");
   console.log("longitude:" + location['coords']['longitude']);
   var region = {
     latitude: location['coords']['latitude'],
     longitude: location['coords']['longitude'],
     latitudeDelta: LATITUDE_DELTA,
     longitudeDelta: LONGITUDE_DELTA,
   }
   console.log("==========================");
   console.log("region object: " + region);
   console.log("==========================");
   console.log(region);
   this.setState({
      location: region,
    });
   };
    // state: {
    //     latitude: LATITUDE,
    //     longitude: LONGITUDE,
    //     latitudeDelta: LATITUDE_DELTA,
    //     longitudeDelta: LONGITUDE_DELTA,
    // };
    // constructor() {
    //   super();
    //
    //   this.state = {
    //         region: {
    //             latitude: LATITUDE,
    //             longitude: LONGITUDE,
    //             latitudeDelta: LATITUDE_DELTA,
    //             longitudeDelta: LONGITUDE_DELTA,
    //         }
    //       };
    //   }

    // componentDidMount() {
    //   // navigator.geolocation.getCurrentPosition(
    //   //   position => {
    //   //     const latitude = JSON.stringify(position.coords.latitude);
    //   //     const longitude = JSON.stringify(position.coords.longitude);
    //   //
    //   //     this.setState({
    //   //         latitude,
    //   //         longitude
    //   //     });
    //   //   },
    //   //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //   // );
    //   navigator.geolocation.getCurrentPosition(
    //     position => {
    //         this.setState({
    //                  latitude: position.coords.latitude,
    //                  longitude: position.coords.longitude,
    //                  latitudeDelta: LATITUDE_DELTA,
    //                  longitudeDelta: LONGITUDE_DELTA,
    //         });
    //     });
    //     console.log("getCurrentPosition" + region);
    // }



    render() {
      let text = 'Waiting..';
      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
      }
      return (
        // <View style={styles.container}>
        // <Text style={styles.paragraph}>{text}</Text>
        // </View>
        <MapView style={{flex: 1}}
          showsUserLocation={true}
          region={ this.state.location }
          onRegionChange={ location => this.setState({location}) }
          onRegionChangeComplete={ location => this.setState({location}) }
        />

        // <MapView style={{flex: 1}}
        //   showsUserLocation={true}
        //   region={{
        //   latitude: this.state.latitude,
        //   longitude: this.state.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421
        //   }}
        //   onRegionChange={ region => this.setState({region}) }
        //   onRegionChangeComplete={ region => this.setState({region}) }
        // />
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ClientMap;
