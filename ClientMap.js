import MapView from 'react-native-maps';
import React, { Component } from 'react';

class ClientMap extends Component<Props>
{

    render() {
      return (
        <MapView style={{flex: 1}}
        region={{
          latitude: 42.2411,
          longitude: 88.3162,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        />
      );
    }
}

export default ClientMap;
