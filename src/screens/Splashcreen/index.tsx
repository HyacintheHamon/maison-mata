import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const splashScreenAnimation = require('../../animations/splashscreen_animation.json');

export default class SplashScreen extends Component {

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage

    const data = await this.performTimeConsumingTask();

    this.animation.play();

    if (data !== null) {
      console.log('performTimeConsumingTask ' + data)
    }

    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value == null) {

        AsyncStorage.setItem('alreadyLaunched', 'true').then(() => {
          // App has never been launched
          console.log('App has never been launched');
          //this.props.navigation.navigate('OnePageVideoWalkthrough');
          this.props.navigation.replace('Tabs');
        });

      } else {
        // App was already launched
        console.log('App was already launched');
        //this.userLoggedIn();
        this.props.navigation.replace('Tabs');
      }
    });
  }


  render() {
    return (
      <View style={styles.View}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          autoPlay={true}
          loop={false}
          source={splashScreenAnimation}
          style={{ position: 'relative', width: 250, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
          //progress={this.state.progress}
          onAnimationFinish={() => { this.props.navigation.replace('Tabs'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  View: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
  }

});