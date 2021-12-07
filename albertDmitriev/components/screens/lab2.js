import React, { useState , useEffect} from "react";
import { View , Text, ScrollView , StyleSheet, Image, TouchableOpacity} from "react-native";
import axios from "axios";

const Lab2 = ({ navigation }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/dalikk/json46/posts')
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
            <TouchableOpacity key={item.id} style={styles.item} onPress={() => (navigation.navigate("Article", item))}>
                <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: imgUrl}} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
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