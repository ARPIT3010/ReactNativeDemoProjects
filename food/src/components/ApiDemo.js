import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import axios from "axios";


const ApiDemo = () => {

    const [result,setResult] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://asos2.p.rapidapi.com/categories/list',
        params: {country: 'US', lang: 'en-US'},
        headers: {
          'x-rapidapi-key': 'bd000b676amshe06d777f5bd4334p13f991jsn3fcfe0eac791',
          'x-rapidapi-host': 'asos2.p.rapidapi.com'
        }
      };
    

      useEffect(() => {
        console.log("i M in the api");
        axios.request(options).then(function (response) {
            
            console.log(response.data);
            setResult(response.data);
            
        }).catch(function (error) {
            console.error(error);
        });
    },[]);
      
    return(
     <View>
        <Text>Api Demo</Text>
   
    </View>
    );
};

export default ApiDemo;