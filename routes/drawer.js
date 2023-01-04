import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Screen" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home Screen" component={HomeStack} />
        <Drawer.Screen name="About Screen" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootDrawerNavigator;