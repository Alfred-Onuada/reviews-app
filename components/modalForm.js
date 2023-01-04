import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { Formik } from 'formik';
import globalStyles from "../assets/styles/global";
import * as yup from 'yup';
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const reviewSchema = yup.object().shape({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(10),
  rating: yup.string()
    .required()
    .test('is-between-1-and-5', 'Rating should be between 1 and 5', (value) => {
      value = +value;

      if (value >= 1 && value <= 5) {
        return true
      } else {
        return false
      }
    })
})

export default function ModalForm({ addReview }) {

  const [error, setError] = useState('');
  const [photo, setPhoto] = useState(null);

  const determineErrorToShow = function (errors, values) {
    /* make sure the error is for a field that has been touched */
    let keys = Object.keys(errors);
    let i = 0;
    let validError = undefined;
  
    while (i < keys.length) {
      let key = keys[i];
  
      if (values[key].length > 0) {
        validError = errors[key];
        break
      }
  
      i++;
    }
  
    setError(validError)
  }

  const handlePhotoUpload = async function () {
    try {
      const result  = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, selectionLimit: 1 });
  
      if (result.assets) {
        setPhoto(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={globalStyles.modalContainer}>
      <Formik onSubmit={(values, action) => {
          action.resetForm();
          addReview({ ...values, imgSrc: photo  });
        }}
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>              
              {
                error &&
                <View>
                  <Text style={globalStyles.errorText}>{ error }</Text>
                </View> 
              }

              <TextInput placeholder="Review Title" 
                onChangeText={handleChange('title')}
                value={values.title} 
                style={globalStyles.input}
                onBlur={() => determineErrorToShow(errors, values)}/>

              <TextInput placeholder="Review Body" 
                multiline
                onChangeText={handleChange('body')}
                value={values.body} 
                style={globalStyles.input}
                onBlur={() => determineErrorToShow(errors, values)}/>

              <TextInput placeholder="Rating" 
                onChangeText={handleChange('rating')}
                value={values.rating}
                keyboardType='numeric' 
                style={globalStyles.input}
                onBlur={() => determineErrorToShow(errors, values)}/>

              <TouchableOpacity style={globalStyles.submitBtn} onPress={handlePhotoUpload}>
                <Text style={globalStyles.submitText}>Upload Cover Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={globalStyles.submitBtn} onPress={handleSubmit}>
                <Text style={globalStyles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
      </Formik>
    </View>
  );
}