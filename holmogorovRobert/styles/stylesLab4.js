import {StyleSheet} from 'react-native';
const stylesLab4 = StyleSheet.create({   
    box: {
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        height:286,
        width: 300,
        marginBottom:20,
        backgroundColor:'#F2F2F2',
        paddingHorizontal:20,
        alignSelf: 'center',
    },
    buttonLike: {
        marginLeft:2
    },
    button: { 
        padding:10,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 35,
        textAlign: 'center',
        marginTop:10,      
    },
    like: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        justifyContent: "center"
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical:20
    },
    textBox:{
        marginBottom:20,
        height:160,
    },
    text:{
        textAlign: 'justify',
        fontSize: 16,
    },
    imgLikes: {
        width:22,
        height:22
    },
    inputBody: {
        marginTop:10,
        height:150,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#C4C4C4",
    },
    inputTitle:{
        marginTop:10,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "#C4C4C4",
        textAlign: "center"
    }
});
export default stylesLab4;