import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#FFD232',
    height: '100%',
  },
  containerBackgroundColor: {
    backgroundColor: '#FFD232',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 20
  },
  boxSize: {
    backgroundColor: '#FF8B03',
    borderRadius: 5,
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
});

export default styles;