import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
}
from 'react-native';

const App = ({navigation}) => {
  const[count, setCount]=useState(1)
  const[image, setImg]=useState(require('./img/1.jpg'))
  const[name, setName]=useState('Наруто')
  useEffect(()=>{
    if(count==2)
    {
      setImg(require('./img/2.jpg'))
      setName('Атака титанов')
    }
    if(count==3)
    {
      setImg(require('./img/3.jpg'))
      setName('Волейбол')
    }
    if(count==4)
    {
      setImg(require('./img/4.jpg'))
      setName('Клинок рассекающий демонов')
    }
    if(count==5)
    {
      setImg(require('./img/5.jpg'))
      setName('Геройская академия')
    }
    if(count==6)
    {
      setImg(require('./img/1.jpg'))
      setName('Наруто')
      setCount(1)
    }
  })
    return(
    <View style={styles.container}>
      <Image style={styles.img} source={image}/>
      <Text style={styles.text}>Аниме: {name}</Text>
      <Button title='Next' color='maroon' onPress={()=>{setCount(count+1)}}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: '#fff',
        margin: 10,
      },
      img:{
        marginTop: 5,
        borderRadius: 20,
        width: 350,
        height: 450,
      },
});

export default App;