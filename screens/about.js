import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import globalStyles from '../assets/styles/global';

export default function About() {
  return (
    <ImageBackground source={require('../assets/background.png')} style={globalStyles.backgroundImage}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.aboutPageText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel unde similique velit iure quae consectetur aut! Vitae, sequi. Recusandae eveniet animi quam porro, quibusdam ducimus quo modi accusamus odit? Similique?</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
})