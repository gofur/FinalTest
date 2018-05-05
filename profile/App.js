import React from 'react';
import {StackNavigator} from 'react-navigation';

import Profile from './screen/profile';
import ProfileRow from './screen/profileRow';
import AddHighlight from './screen/addHighlight';
const App = StackNavigator({
  
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile'
    }
  },
  ProfileRow: {
    screen: ProfileRow,
    navigationOptions: {
      title: 'Profile Detail'
    }
  },
  AddHighlight: {
    screen: AddHighlight,
    navigationOptions: {
      title: 'Add Highlight'
    }
  },
},{
  initialRouteName: 'Profile'
});

export default App;