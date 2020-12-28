import React, {useReducer} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const reducer = (state, action) =>{
    switch(action.colorTochage){
        case 'red':
            return {...state, red:state.red + action.amount};
        case 'green':
            return {...state, green:state.green + action.amount};
        case 'blue':
            return {...state, blue:state.blue + blue.amount};
        default:
            return state;
    }
}

const SquareScrenReducer = () =>{
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    const { red,green,blue} = state;

    return <View>
    <Text>Square Demo</Text>
    <ColorCounter color="Red" onIncrease = {()=>dispatch({colorTochange:'red',amount:15})}/>
    <ColorCounter color="Green" onIncrease = {()=>}/>
    <ColorCounter color="Blue"onIncrease = {()=>}/>
    <View 
        style={{
            height:100, width:100,backgroundColor:`rgb(${red},${green},${blue})`
        }}
    />
    </View>
}

const styles = StyleSheet.create({});
export default SquareScrenReducer;