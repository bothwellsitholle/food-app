import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [errMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
            limit: 50,
            term: searchTerm,
            location: 'New Jersey',
            },
        });
        setResults(response.data.businesses);
        setErrorMessage('');
        } catch (err) {
        console.log(err);
        setErrorMessage('Something went wrong');
        }
    };

        useEffect(() => {
        searchApi('pasta') 
    }, [])

    return [searchApi, errMessage, results]
}