import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import globalStyles from '../assets/styles/global';

export default function Rating({ rating }) {
  return (
    <View style={{ ...globalStyles.ratingContainer, width: (rating / 5) * 125 }} >
      <MaterialCommunityIcons name='heart' size={25} color={'gold'} />
      <MaterialCommunityIcons name='heart' size={25} color={'gold'} />
      <MaterialCommunityIcons name='heart' size={25} color={'gold'} />
      <MaterialCommunityIcons name='heart' size={25} color={'gold'} />
      <MaterialCommunityIcons name='heart' size={25} color={'gold'} />
    </View>
  );
}