

import { View, StyleSheet, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Appbar } from 'react-native-paper';
import Card from '../components/Card';

function Home() {

    const [isLoading, setisLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json");
        const json = await res.json();
        setDogs(json);
        setisLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    const renderItem = ({ item }: { item: any }) =>
        <Card
            title={item.name}
            subtitle={item.bred_for}
            uri={item.url}
        />;


    return (
        <SafeAreaView>
            <Appbar.Header statusBarHeight={0} >
                <Appbar.Content title="DogApp" />
            </Appbar.Header>
            {isLoading && <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>}
            {!isLoading &&
             <FlatList
                data={dogs}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
                numColumns={2}
            />

            }
        </SafeAreaView>
    );
}

export default Home;


const styles = StyleSheet.create({
   
    loading: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: "90%"
    }
})

function setDogs(json: any) {
    throw new Error('Function not implemented.');
}
