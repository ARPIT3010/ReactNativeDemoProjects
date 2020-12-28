import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = (props)=>{
    return (
        <View style={styles.background}>
            <Feather name="search" style = {styles.iconStyle}/>
            <TextInput placeholder="Search" 
            autoCapitalize ="none"
            autoCorrect = {false}
            style={styles.inputStyle}
                value={props.term}
                onChangeText = {newTerm => props.onTermChange(newTerm)}
                onEndEditing = {() => props.onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle : {
       fontSize:17,
        flex:1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});
    
export default SearchBar;