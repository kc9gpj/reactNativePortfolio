import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button,} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.containerHome}>
        <Text style={styles.bigRed}>David Hoffmann</Text>
        <Button
      onPress={() => Linking.openURL('https://www.davidhoffmann.me/')}
      title="Portfolio Website"/>
                
           
      <Button onPress={() => Linking.openURL('mailto:david.p.hoffmann1@gmail.com') }
      title="Email" />      
      <Text></Text>
        <Image
          style={{width: 256, height: 341, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/hY6t62p.jpg'}}
        />
    
      </View>
    );
  }
}

class PortfolioScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigRed}>Portfolio</Text>
        <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/jwR64t5.png'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/Hangman')}>
                Hangman 
      </Text>  
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/CGTog6U.jpg'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/StarWarsRPG')}>
                Star Wars 
      </Text>  
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/VcUbtvC.jpg'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/TriviaGame')}>
                Trivia 
      </Text>  
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/o1ef1LF.jpg'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/GifTastic')}>
                Giftastic
      </Text>
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/KSYWvtv.png'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/TrainSchedule')}>
                Train Scheduler
      </Text>
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/JsGa604.png'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/FoodSearch')}>
                Food Search
      </Text>
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/wYSi9xN.png'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/dogfriendfinder')}>
                Dog Friend Finder
      </Text>
      <Image
          style={{width: 50, height: 50, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/EmUhCtn.jpg'}}
        />
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/burger')}>
                Eat-Da-Burger
      </Text>
    
    
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Portfolio: PortfolioScreen,
});

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#12aeac',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#12aeac',
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
