import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({item}) =>{
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri:item.image_url}}></Image>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        height:120,
        borderRadius:10
    },
    name:{  
        fontWeight:'bold'
    },
    container:{
        marginLeft:10
    }
});
export default ResultDetail;