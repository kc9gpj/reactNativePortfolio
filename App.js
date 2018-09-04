import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Button, ImageBackground} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./trees.jpg')} style={{width: '100%', height: '100%', position: "absolute"}}>
      
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
      </ImageBackground>

    );
  }
}

class PortfolioScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./trees.jpg')} style={{width: '100%', height: '100%', position: "absolute"}}>

      <View style={styles.containerHome}>
        <Text style={styles.bigRed}>Portfolio</Text>

     
        <View style={{flex: 1, flexDirection: 'row'}}>
      
      
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/Hangman')}>
                <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/jwR64t5.png'}}
        />
      </Text>  
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/StarWarsRPG')}>
               <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/CGTog6U.jpg'}}
        />
      </Text> 
      </View> 
      <Text></Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
    
       
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/TriviaGame')}>
                  <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/VcUbtvC.jpg'}}
        />
      </Text>  
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/GifTastic')}>
                 <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/o1ef1LF.jpg'}}
        />
      </Text>
      </View>
      
        <View style={{flex: 1, flexDirection: 'row'}}>
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/TrainSchedule')}>
                  <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/KSYWvtv.png'}}
        />
      </Text>
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/FoodSearch')}>
                  <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/JsGa604.png'}}
        />
      </Text>
      </View>
      
        <View style={{flex: 1, flexDirection: 'row'}}>
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/dogfriendfinder')}>
                <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/wYSi9xN.png'}}
        />
      </Text>
     
    <Text style={{color: '#ba2f30'}}
      onPress={() => Linking.openURL('https://github.com/kc9gpj/burger')}>
                 <Image
          style={{width: 150, height: 150, borderRadius: 15}}
          source={{uri: 'https://i.imgur.com/EmUhCtn.jpg'}}
        />
      </Text>
    
    </View>
      </View>
      </ImageBackground>

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
