import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';
import { createAppContainer} from 'react-navigation';
//import RootNavigator from './RootNavigator.js'

import { createStackNavigator } from 'react-navigation-stack';

const rootStack = createStackNavigator({
    list: {
      screen: EventList,
      navigationOptions: () => ({
        title: "Your Events",
      }),
    },
    form: {
      screen: EventForm,
      navigationOptions: () => ({
        title: "Add an Event",
      }),
    },
});

const App = createAppContainer(rootStack);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <RootNavigator/>
//     );
//   }
// }

// export default StackNavigator({
//     list: {
//       screen: EventList,
//       // navigationOptions: () => ({
//       //   title: "Your Events",
//       // }),
//     },
// });

// export default function App() {
//   return (
//     <EventList/>
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <Text>Hello User, this is called local debbugging on your device!</Text>
//     // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
