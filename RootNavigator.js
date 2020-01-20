import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


const RootNavigator = createMaterialTopTabNavigator({
  // ...,
  EventList: EventList,
  });

export default createAppContainer(RootNavigator);
