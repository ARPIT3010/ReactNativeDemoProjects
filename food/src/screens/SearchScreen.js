import React, {useState,useEffect} from 'react';
import {Text,StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ()=>{
    const [term,setTerm] = useState('');
    const [searchApi, result, errorMeassage] = useResults();

    console.log("Api Result" +result);
    // const [result,setResult] = useState([]);
    // const [errorMeassage, setErrorMessage] = useState('');

    // const searchApi = async term =>{
    //     console.log("I am in the api");
    //     try{
    //     const response = await yelp.get('/search',{
    //         params : {
    //             //?limit=50
    //             limit : 50,
    //             term : term,
    //             location : 'san jose'
    //         }
    //     });
    //     console.log("Response " +response.data.businesses );    
    //     setResult(response.data.businesses);}
    //     catch(error){
    //         setErrorMessage("Something Went Wrong");
    //     }
    // }

    // useEffect(() => {
    //     searchApi('pasta');
    // },[]);
    const filterResultByPrice = (price) =>{
        return result.filter(res =>{
            return res.price === price;
        })
    }
    
    return (
        <View>
            <SearchBar term={term} onTermChange = {newTerm=>setTerm(newTerm)}
                onTermSubmit = {()=>searchApi(term)}
            />
            
            {errorMeassage ? <Text>{errorMeassage}</Text> :<Text>{term}</Text>}
            <Text>We have found {result.length}</Text>
            <ScrollView>
            <ResultsList    results={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultsList  results={filterResultByPrice('$$')} title="Bit Procer"/>
            <ResultsList  results={filterResultByPrice('$$$')} title="Big Splendor"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({});
    
export default SearchScreen;
// /navigation={props.navigation}