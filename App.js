import 'react-native-gesture-handler';
import { useState } from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar as platformStatusBar } from 'react-native';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import RootDrawerNavigator from './routes/drawer';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  (async () => {
    try {
      await loadAsync({
        'DMSans-Regular': require('./assets/fonts/DMSans-Regular.ttf'),
        'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf')
      });
  
      await SplashScreen.hideAsync();
  
      setFontsLoaded(true);
    } catch (error) {
      console.log("Font's failed to load");
    }
  })();

  if (fontsLoaded) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <RootDrawerNavigator />

        <StatusBar style='auto' />
      </SafeAreaView>
    );
  } else {
    return  null;
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? platformStatusBar.currentHeight : 0
  }
});
