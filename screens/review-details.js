import { Text, StyleSheet, View, Image } from 'react-native';
import globalStyles from '../assets/styles/global';
import Rating from '../components/rating';

export default function ReviewDetails({ navigation }) {
  const data = navigation.getState().routes[1].params;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.reviewPageContainer}>
        <Image 
          style={globalStyles.reviewImage}
          source={{ uri: data.imgSrc }} />
        <Text style={globalStyles.reviewPagetitle}>{ data.title }</Text>
      </View>
      <Text style={globalStyles.reviewPageBody}>{ data.body }</Text>
      <View style={globalStyles.reviewPageRatingContainer}>
        <Text style={globalStyles.reviewPageRating}>Rating:</Text>
        <Rating rating={data.rating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
})