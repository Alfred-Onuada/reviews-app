import globalStyles from "../assets/styles/global";
import { View, Text, Pressable } from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function customHeader({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={globalStyles.header}>

      {/* Shows the back button */}
      {
        back && 
        <Pressable onPress={navigation.goBack} 
          style={globalStyles.backIconContainer}>
          <MaterialIcons name="keyboard-backspace" size={24} color='white'
            style={globalStyles.backIcon} />
        </Pressable>
      }

      {/* Shows the burger menu */}
      {
        (route.name == "Home" || route.name == "About") && 
        <Pressable onPress={() => navigation.toggleDrawer()}
          style={globalStyles.backIconContainer}>
          <MaterialIcons name="menu" size={24} color='white' 
            style={globalStyles.backIcon}/>
        </Pressable>
      }
      
      <View style={globalStyles.titleContainer}>
        <Text style={globalStyles.titleText}>{title}</Text>
      </View>
    </View>
  );
}