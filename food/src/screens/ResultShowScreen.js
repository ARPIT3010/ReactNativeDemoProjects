import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) =>{

    const id = navigation.getParam('id');
    const [result,setResult] = useState(null);

    const getResult = async id =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log("Response" +response.data);
    };


    useEffect(() =>{
        console.log("id" + id)
        getResult();
    },[]);
    if(!result)
        return null;
    return (
        <View>
    <Text>{result.name}</Text>
    <FlatList
        data ={result.photos}
        keyExtractor={(photo) => photo}
        renderItem= {({item}) =>{
            return <Image style={styles.image} source={{uri:item}}/>
        }}
    />
    </View>
    )
};

const styles = StyleSheet.create({
    image:{
        width:200,
        height:200
    }
});
export default ResultShowScreen;