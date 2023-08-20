import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import styles from "./patiStore.style";

const pati = ({props}) => {
    return(
        <View style={styles.container}>

            <View style={styles.body}>

                <View style={styles.top}>
                    <Image style={styles.image} source={{uri: props.imgURL}} />
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.product_name}>{props.title}</Text>
                    <Text style={styles.prduct_price}>{props.price}</Text>
                    <Text style={styles.product_stock} >{props.inStock? "" : "STOKTA YOK"}</Text>
                </View>

            </View>

        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#f5f5f5",
//         margin: 7,
//         borderRadius: 10,
//         marginLeft: 0,
//         width:180,
//     }
// })
export default pati;