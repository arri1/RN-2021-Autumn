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
        marginTop: 20
    },
    item: {
        marginHorizontal: 20,
        marginBottom: 30,
        padding: 10,
        // borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "#B3B3B3"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        textAlign: "center"
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