import React, {useState, useEffect} from 'react';
import {StyleSheet,Text,View,Button,TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: '#fff',
        margin: 12,
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 4,
        paddingHorizontal: 30,
        elevation: 3,
        backgroundColor: '#F80012',
      }
});

const Lab1 = ({navigation}) => {
  const [color, setColor] = useState('#009E8E');
  const[count, setCount]=useState(1)
  const[name, setName]=useState('Не плюй в колодец, пригодится воды напиться.')
  useEffect(()=>{
    if(count==2)
    {
      setName('Без труда не выловишь и рыбку из пруда.')
    }
    if(count==3)
    {
      setName('Не беречь поросли, не видать и дерева.')
    }
    if(count==4)
    {
      setName('Дважды в год лето не бывает.')
    }
    if(count==5)
    {
      setName('Летом не припасешь, зимой не принесешь.')
    }
    if(count==6)
    {
      setName('Не плюй в колодец, пригодится воды напиться')
      setCount(1)
    }
    if(count==0)
        {
          setName('Дважды в год лето не бывает.')
          setCount(5)
        }
  })
    return(
    <View style={[styles.container,{backgroundColor:color}]}>
      <TouchableOpacity
                    style={styles.button}
                    onPress={() => setColor( '#' + Math.floor(Math.random()*21341241).toString(16))}
      />
      <Text style={styles.text}>Есть такая пословица: {name}</Text>
      <Button title='Next' color='#3415B0' onPress={()=>{setCount(count+1)}}></Button>
      <Button title='Back' color='#3415B0' onPress={()=>{setCount(count-1)}}></Button>
    </View>
  )
}

export default Lab1;