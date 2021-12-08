import React, { useState , useEffect} from "react";
import { View , Text, ScrollView , StyleSheet, Image} from "react-native";
import axios from "axios";

const Lab2 = ({ router }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/dalikk/json41/posts')
        .then(({data: newData}) => {
            setData(newData);
        })
        .catch(() => {});
    }, []);

    return(
        <ScrollView style={styles.main}>
        {data.map(item => {
            const imgUrl = item.imgurl;
          return (
            <View key={item.id} style={styles.item}>
                <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: imgUrl}} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text >{item.body}</Text>
            </View>
          );
        })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    item: {
        margin: 20,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    imgContainer: {
        alignItems: "center"
    },
    img: {
        width: 300,
        height: 150
    }
})

export default Lab2;