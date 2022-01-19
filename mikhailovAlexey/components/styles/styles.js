import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#FFD232',
    height: '100%',
    width: '100%',
  },
  containerBackgroundColor: {
    backgroundColor: '#FFD232',
  },
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
  box: {
    backgroundColor: '#454545',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: "center",
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 20
  },
  boxSize: {
    backgroundColor: '#454545',
    borderRadius: 5,
    width: 370,
    margin: 5,
    height: 100,
    justifyContent: 'center',
    color: 'white',
    elevation: 4,
  },
  boxTextStyle: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  },
  navBarBox: {
    top: 0,
    height: 70,
    backgroundColor: '#454545',
    color: 'white',
  },
  navBarIcon : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#454545",
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  navBarIconText : {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#454545',
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: 'white',
  },
  menuButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    height: 120,
    borderRadius: 5,
    backgroundColor: '#454545',
    elevation: 4,
    margin: 6,
  },
  menuButtonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 50,
    color: 'white',
  },
  memoButton: {
    zIndex: -1,
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#454545',
    elevation: 4,
    top: 195,
  },
  memoButtonLeft: {
    left: 15,
  },
  memoButtonRight: {
    right: 15,
  },
  scroll: {
    margin : 15,
  },
  textArea: {
    width: 370,
    backgroundColor: '#454545',
    borderRadius: 5,
    paddingLeft: 20,
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 5,
  },
  topRightButton: {
    marginRight: 5,
    height: 35,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postEditButton: {
    width: 25, 
    height: 25, 
    backgroundColor: 'white', 
    zIndex: 1, 
    position:'absolute', 
    right: 30, 
    top: 0,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
