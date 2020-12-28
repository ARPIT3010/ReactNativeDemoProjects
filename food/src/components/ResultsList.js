import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';
const ResultsList = (props) =>{
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text>Results:{props.results.length}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) =>{
                    return (
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Show',{id:item.id})}>
                    <ResultDetail item = {item}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
});

export default withNavigation(ResultsList);