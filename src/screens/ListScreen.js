import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name : 'Friend1'},
        {name : 'Friend2'},
        {name : 'Friend13'},
        {name : 'Friend14'},
        {name : 'Friend51'},
        {name : 'Friend16'},
        {name : 'Friend17'},
        {name : 'Friend171'},
        {name : 'Friend173'},
        {name : 'Friend190'},
        {name : 'Friend12'}
    ]
    return (
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={friend => friend.name}
    data={friends}
    renderItem={({item} ) =>{
        return <Text style={styles.textStyle} key={item.index}>{item.name}</Text>;
    }}/>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:5
    }
});

export default ListScreen;