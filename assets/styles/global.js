import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  header: {
    paddingVertical: 15,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  titleContainer: {
    flex: 11
  },
  backIconContainer: {
    flex: 1,
    display: 'flex',
  },
  backIcon: {
    textAlign: 'center'
  },
  reviewContainer: {
    padding: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  reviewTitle: {
    fontFamily: 'DMSans-Regular'
  },
  reviewImage: {
    width: 300,
    height: 300,
    borderRadius: 10
  },
  reviewPageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  reviewPagetitle: {
    fontFamily: 'DMSans-Bold',
    marginVertical: 15,
    fontSize: 24
  },
  reviewPageBody: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left"
  },
  reviewPageRating: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
  },
  reviewPageRatingContainer: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    overflow: 'hidden',
  },
  aboutPageText: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18
  },
  backgroundImage: {
    flex: 1,
  },
  modalOpenBtn: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  modalIcon: {
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'DMSans-Bold'
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  }, 
  modalContainer: {
    padding: 20,
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily:  'DMSans-Regular'
  },
  submitBtn: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textAlign: 'center'
  },
  errorText: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    textTransform: 'capitalize',
    color: 'crimson'
  }
})

export default globalStyles;