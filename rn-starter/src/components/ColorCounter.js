import React from 'react';
import {Text, View, FlatList, StyleSheet,Button} from 'react-native';

const ColorCounter = (props) =>{
    return ( 
        <View>
    <Text>{props.color}</Text>
    <Button onPress={()=>props.onIncrease()} title={`Increse ${props.color}`}/>
    <Button onPress={()=>props.onDecrease()} title={`Decrese ${props.color}`}/>
    </View>
    )
}

const styles = StyleSheet.create({});
export default ColorCounter;