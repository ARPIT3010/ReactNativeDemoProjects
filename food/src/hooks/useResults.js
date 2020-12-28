import React,{useState, useEffect} from 'react';
import yelp from '../api/yelp';

// logic of yelp api 

export default () => {
    const [result,setResult] = useState([]);
    const [errorMeassage, setErrorMessage] = useState('');

    const searchApi = async term =>{
        console.log("I am in the api");
        try{
        const response = await yelp.get('/search',{
            params : {
                //?limit=50
                limit : 50,
                term : term,
                location : 'san jose'
            }
        });
        console.log("Response " +response.data.businesses );    
        setResult(response.data.businesses);}
        catch(error){
            setErrorMessage("Something Went Wrong");
        }
    }

    useEffect(() => {
        searchApi('pasta');
    },[]);

//we return all the varible required in the search Screen component
    return [searchApi,result,errorMeassage];
};

