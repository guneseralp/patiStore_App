import React from "react";
import {SafeAreaView,StyleSheet,TextInput,Text,FlatList} from "react-native";
import product_data from "./products.json";
import Products from "./components/patiStore";


const App = () => {
    const renderProduct = ({item}) => <Products props={item}/>
    const [number,onChangeNumber] = React.useState('')
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>PATİSTORE</Text>
            <TextInput style={styles.input} onChangeText={onChangeNumber} value={number} placeholder="Search.."/>
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={product_data}
            renderItem={renderProduct}
            numColumns={2}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop:50,
      },
      header: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#cd5c5c',
        padding: 5
      },
      input: {
        height: 40,
        margin: 10,
        backgroundColor: '#f8f8ff',
        color: '#dcdcdc',
        padding: 10,
        borderRadius: 5,
      }
})


export default App;