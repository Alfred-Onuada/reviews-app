import { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Modal, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../assets/styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ModalForm from '../components/modalForm';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg', title: 'God of War: Ragnarok', rating: 4.6, body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, maxime molestiae voluptates laudantium accusantium nihil dolorem nulla, officiis iste dolore totam. Repellendus asperiores corporis odio architecto numquam eius unde reiciendis.', key: '1' },
    { imgSrc: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/o/Mortal-Kombat-X--Game-For-PC-6554153_3.jpg', title: 'Mortal Kombat: X', rating: 4.9, body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, maxime molestiae voluptates laudantium accusantium nihil dolorem nulla, officiis iste dolore totam. Repellendus asperiores corporis odio architecto numquam eius unde reiciendis.', key: '2' },
    { imgSrc: 'https://static-ie.gamestop.ie/images/products/281074/3max.jpg', title: 'FIFA 23', rating: 5, body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, maxime molestiae voluptates laudantium accusantium nihil dolorem nulla, officiis iste dolore totam. Repellendus asperiores corporis odio architecto numquam eius unde reiciendis.', key: '3' },
    { imgSrc: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/816o-n47S8L._AC_SL1500_.jpg', title: 'NBA 2K23', rating: 4.7, body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, maxime molestiae voluptates laudantium accusantium nihil dolorem nulla, officiis iste dolore totam. Repellendus asperiores corporis odio architecto numquam eius unde reiciendis.', key: '4' },
  ])

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addReview = function (review) {
    setReviews(prevReviews => {
      prevReviews.push({ ...review, key: Math.random().toString() });

      return prevReviews;
    })

    setModalIsVisible(false);
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalIsVisible} animationType='slide'>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1 }}>
            <View style={globalStyles.modalHeader}>
              <Text style={globalStyles.modalTitle}>Add a new Review</Text>

              <Pressable onPress={() => setModalIsVisible(false)} >
                <MaterialIcons name='cancel' size={28} color={'black'} />
              </Pressable>
            </View>

            <ModalForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Pressable onPress={() => setModalIsVisible(true)}
        style={globalStyles.modalOpenBtn}>
        <MaterialIcons name='add' size={24} color={'black'}
          style={globalStyles.modalIcon} />
      </Pressable>

      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}
            style={globalStyles.reviewContainer}>
            <Text style={globalStyles.reviewTitle}>{ item.title }</Text>
          </TouchableOpacity>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
})