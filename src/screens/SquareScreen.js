import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'


const SquareScren = () =>{
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);

    return <View>
    <Text>Square Demo</Text>
    <ColorCounter color="Red" onIncrease = {()=>setRed(red+15)} onDecrease = {()=> setRed(red-15)}/>
    <ColorCounter color="Green" onIncrease = {()=>setRed(green+1)} onDecrease = {()=> setRed(green-1)}/>
    <ColorCounter color="Blue"onIncrease = {()=>setRed(blue+1)} onDecrease = {()=> setRed(blue-1)}/>
    <View 
        style={{
            height:100, width:100,backgroundColor:`rgb(${red},${green},${blue})`
        }}
    />
    </View>
}

const styles = StyleSheet.create({});
export default SquareScren;