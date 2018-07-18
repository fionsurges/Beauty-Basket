import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack, ActionConst} from 'react-native-router-flux'
import Home from './components/Home'
import Login from './components/Login'
import Welcome from './components/Welcome'

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="home" component={Home}/>
        <Scene key="login" component={Login} title="Login"/>
        <Scene key="loggedIn" component={Welcome} title="Welcome" type={ActionConst.REPLACE} />
      </Stack>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
