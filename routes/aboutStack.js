import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import customHeader from "../components/customHeader";

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={{ header: customHeader }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default AboutStack;