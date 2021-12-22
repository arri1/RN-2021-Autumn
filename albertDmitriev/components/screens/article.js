import React, { useState } from "react";
import { Text , SafeAreaView , StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";

const Article = ({ route }) => {
    const [imgURL, setimgURL] = useState(route.params.imgurl)
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{route.params.title}</Text>
                <Image style={styles.img} source={{uri: imgURL}}/>
                <Text style={styles.artBody}>{route.params.body}</Text>
                <TouchableOpacity style={styles.likeBtn}>
                    <Text style={styles.likeBtnText}>ЛАЙК</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: "center"
    },
    title: {
        color:"black",
        fontWeight: "700",
        fontSize: 28,
        textAlign: "center",
        marginBottom: 25
    },
    img: {
        width: 350,
        height: 200,
        marginBottom: 20
    },
    artBody: {
        color: "black",
    },
    likeBtn: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#56E58F",
        borderRadius: 10,
        marginTop: 20
    },
    likeBtnText: {
        fontSize: 20,
        fontWeight: "800",
    }
})

export default Article;