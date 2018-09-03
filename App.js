import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button,} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';


export default createBottomTabNavigator({
  Home: HomeScreen,
  Portfolio: PortfolioScreen,
});



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigRed}>David Hoffmann</Text>
        <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://www.davidhoffmann.me/')}>
                Portfolio Website
      </Text>        
      <Text style={{color: '#ba2f30'}}>david.p.hoffmann1@gmail.com</Text>
      <Text></Text>
        <Image
          style={{width: 256, height: 341, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/hY6t62p.jpg'}}
        />
        <Button
        title="Go to Dave's Portfolio"
        onPress={() =>
          navigate('Portfolio')
        }
      />
      </View>
    );
  }
}

class PortfolioScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigRed}>David Hoffmann</Text>
      
        <Button
        title="Home"
        onPress={() =>
          navigate('Home')
        }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d8989',
    alignItems: 'center',
    justifyContent: 'center',

  },

  bigRed: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ba2f30',

  },

  buttonContainer: {
    margin: 20,
    backgroundColor: 'white',
  },
});
