import React, { useState,useEffect } from 'react';
import useAuth from '../Auth/useAuth';
import axios from '../axios';
const BOOKS_URL = 'Book/all'
export default function useGetBook() {
    const [books, setBooks] = useState([]);
    const{auth} = useAuth();
    useEffect(() => {
        const fetchData = async()=>
        {
            try {
                const books = await axios.get(BOOKS_URL,{
                headers:{'Authorization':'bearer '+auth.accessToken}})
                console.log(books.status)
                setBooks(books.data);
            }catch (err) {
                console.log(err);
                if (!err?.response) {
                    console.log('Server problem');
                } else if (err.response?.status === 401) {
                    console.log(401);
                } else {
                    console.log(err.response.status);
                }
            }
            
            
        };
        fetchData();
    }, []);

    return [books,setBooks];
}
