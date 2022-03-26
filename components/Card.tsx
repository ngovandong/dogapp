import { Image, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

import { IconButton, } from 'react-native-paper';
export type Props = {
    uri: string,
    title: string,
    subtitle: string,
}

function Card(props: Props) {
    const [clicked, setClicked] = useState(false);
    return (
        <View style={styles.card}>
            <View style={styles.wrap}>
                <Image style={styles.img} source={{ uri: props.uri }} />
                <View style={styles.sub}>
                    <View style={styles.row1} >
                        <Text numberOfLines={1}  style={styles.title} >{props.title}</Text>
                        <IconButton
                            icon={clicked ? "cards-heart" : "heart-outline"}
                            // cards-heart-outline
                            color={clicked ? "red" : "#ccc"}
                            size={20}
                            onPress={() => setClicked(pre => !pre)}
                        />
                    </View>
                    <View >
                        <Text numberOfLines={1} style={styles.row2}>{props.subtitle}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: "50%",
        padding: 15,

    },
    wrap: {
        elevation: 1,
        borderColor: "#ccc"
    },
    sub: {
        padding: 10
    },
    img: {
        height: 150,
        width: "100%"
    },
    row1: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    row2: {

    },
    title: {
        textAlign: "left",
        width: "70%"
    }

})