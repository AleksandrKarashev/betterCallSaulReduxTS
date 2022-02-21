// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import colors from './src/constants/colors';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from './src/actions/schedule';
import { RootState } from "./src/types/types";


const Stack = createNativeStackNavigator();

const MyTheme = {
   dark: false,
   colors: {
      primary: '#0A0804',
      background: '#0A0804',
      card: "#0A0804",
      text: '#0A0804',
      border: '#0A0804',
      notification: '#0A0804',
   },
};

const App: React.FC = () => {
   return (
      <NavigationContainer theme={MyTheme} >
         <Stack.Navigator >
            <Stack.Screen
               name="Home"
               component={Screen1}
            />
            <Stack.Screen
               name="Status"
               component={Screen2}
            />
         </Stack.Navigator>
      </ NavigationContainer >
   );
}

const mapStateToProps = (state: RootState) => ({
   isScheduled: state.isScheduled,
});

const ActionCreators = Object.assign(
   {},
   scheduleActions,
);
const mapDispatchToProps = (dispatch: any) => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)







