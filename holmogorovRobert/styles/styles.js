import {StyleSheet} from 'react-native';
const figma = StyleSheet.create({
    img: {
      width:26,
      height:26
    },
    container: { 
      backgroundColor: '#fff'
    },
    titleBox: { 
      marginTop: 20,
      justifyContent: 'center',
      width:26,
      height:45,
      marginLeft:40
    },
    titleText:{
      position:"absolute",
      fontSize:32,
      color: '#fff',
      textAlign: 'center',
      alignSelf: 'center',
      marginTop:20,
    },
    backgRect1: { 
      position: 'absolute',
      width: '100%',
      height: 220,
      borderBottomLeftRadius:130,
      borderBottomRightRadius:130,
    },
    backRect2:{ 
      width: '88%',
      paddingHorizontal:20,
      paddingTop:20,
      height: '87%',
      marginTop: 20,
      borderRadius:35,
      alignSelf: 'center',
      backgroundColor: '#FCFCFC',
      shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 15,
      },
      shadowOpacity: 0.25,
      shadowRadius: 35,
      elevation: 10,
    },
    box: { 
      flex: 1,
      justifyContent: "center",
      borderRadius: 35,
      marginBottom:20,   
      borderRadius: 35,
      borderWidth: 1,
      borderColor: "#C4C4C4",
    },
    text: { 
      padding: 5,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 50,
    }
});
export default figma;