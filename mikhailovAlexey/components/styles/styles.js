import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#FFD232',
    height: 1120
  },
  containerBackgroundColor: {
    backgroundColor: '#FFD232',
  },
  box: {
    backgroundColor: '#FF8B03',
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
    backgroundColor: '#FF8B03',
    width: 380,
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
    height: 75,
    backgroundColor: '#454545',
    color: 'white',
  },
  navBarIcon : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF8B03",
    width: 50,
    height: 50,
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
    backgroundColor: '#FF8B03',
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
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
    backgroundColor: '#FF8B03',
    elevation: 4,
    top: 195,
  },
  memoButtonLeft: {
    left: 15,
  },
  memoButtonRight: {
    right: 15,
  },
  memoBoxSize: {
    backgroundColor: '#FF8B03',
    alignItems: "center",
    width: 380,
    margin: 5,
    height: 170,
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 4,
  },
  memoBoxTextStyle: {
    color: "white",
    fontSize: 16,
    fontFamily: 'Montserrat-Regular'
  },
});

export default styles;