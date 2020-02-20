import React, { Component } from "react";
import { FlatList, Text, StyleSheet, Button, View } from 'react-native';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import {AuthSession} from 'expo'

// const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
//                    'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
//                    'playlist-modify-private','user-read-recently-played','user-top-read'];
// const scopes = scopesArr.join(' ');
//import hash from "./hash";
//import Player from "./Player";
import logo from "./logo.svg";
//import "./SpotifyAuth.css";

class SpotifyApiPlayer extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  componentDidMount() {
    // Set token
  //  let _token = hash.access_token;
    let _token = "yes, hello";
    let _authToken = "";

    const getAuthorizationCode = async () => {
      try {
        const credentials = await getSpotifyCredentials() //we wrote this function above
        const redirectUrl = AuthSession.getRedirectUrl(); //this will be something like https://auth.expo.io/@your-username/your-app-slug
        const result = await AuthSession.startAsync({
          authUrl:
            'https://accounts.spotify.com/authorize/' +
            '?response_type=code' +
            '&client_id=ee58d123abe9446581fabc57e897e75a' +
            '&scope=user-modify-playback-state' +
            '&redirect_uri=http://localhost:19002/',
          // authUrl:
          //   'https://accounts.spotify.com/authorize' +
          //   '?response_type=code' +
          //   '&client_id=' +
          //   credentials.clientId +
          //   (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
          //   '&redirect_uri=' +
          //   encodeURIComponent(redirectUrl),
        })
        } catch (err) {
          console.error(err)
        }
          console.log("======Response========");
          console.log(result);
          console.log("==============");
          return result.params.code
        }

    // if (_token) {
    //   // Set token
    //   this.setState({
    //     token: _token
    //   });
    //   //this.getCurrentlyPlaying(_token);
    // }
    // console.log("=======================");
    // console.dir(getAuthorizationCode);
    // console.log("=======================");
    var wtf = getAuthorizationCode;
    console.log("=======WTF=======");
    console.log(this.wtf);
  }

  getCurrentlyPlaying(token) {
    // var url = 'https://accounts.spotify.com/authorize/'
    // + '?response_type=code'
    // + '&client_id=ee58d123abe9446581fabc57e897e75a'
    // + '&scope=user-modify-playback-state'
    // + '&redirect_uri=http://localhost:19002/';
    // try {
    //     var response = fetch(url, {
    //       method:'POST',
    //     });
    // } catch(error) {
    //     console.log(error);
    // }

    // var response = fetch(url)
    //   .then(response => response).catch(err => console.error(err));
    // var response = fetch('https://api.spotify.com/v1/me/player', {
    //       method: 'GET',
    //       headers: {
    //             Accept: 'application/json',
    //             'Content-Type':'application/json',
    //       },
    //       body: JSON.stringify({
    //             firstParam: 'yourValue',
    //             secondParam: 'yourOtherValue',
    //       }),
    //   });
      console.log("========Auth Session=====");
      console.log(AuthSession.getRedirectUrl());
      // console.log("======Response========");
      // console.log(response);
      // console.log("==============");
      //return response;
    // Make a call using the token
    // $.ajax({
    //   url: "https://api.spotify.com/v1/me/player",
    //   type: "GET",
    //   beforeSend: (xhr) => {
    //     xhr.setRequestHeader("Authorization", "Bearer " + token);
    //   },
    //   success: (data) => {
    //     console.log("data", data);
    //     this.setState({
    //       item: data.item,
    //       is_playing: data.is_playing,
    //       progress_ms: data.progress_ms,
    //     });
    //   }
    // });
  }

  render() {

    return (
      <View style={styles.playerContainer}>
                <Text style={styles.playerText}>Fuck this shit boi</Text>
      </View>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     {!this.state.token && (
      //       <a
      //         className="btn btn--loginApp-link"
      //         href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      //           "%20"
      //         )}&response_type=token&show_dialog=true`}
      //       >
      //         Login to Spotify
      //       </a>
      //     )}
      //     {this.state.token && (
      //       <Player
      //         item={this.state.item}
      //         is_playing={this.state.is_playing}
      //         progress_ms={this.progress_ms}
      //       />
      //     )}
      //   </header>
      // </div>
    );
  }
}

const styles = StyleSheet.create({
    playerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#282c34',
      alignItems: 'stretch'
    },
    playerText: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'white'
    },
});

export default SpotifyApiPlayer;
