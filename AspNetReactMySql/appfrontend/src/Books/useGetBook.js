import { useState,useEffect } from 'react';
import useProtectedAxios from '../Auth/useProtectedAxios';
const BOOKS_URL = 'Book/all'

export default function useGetBook() {
    const [books, setBooks] = useState([]);
    const protectedAxios = useProtectedAxios();
    useEffect(() => {
        const fetchData = async()=>
        {
            try {
                const books = await protectedAxios.get(BOOKS_URL)
                console.log(books?.status)
                setBooks(books?.data);
            }catch (err) {
                
            } 
        };
        fetchData();
    }, []);

    return [books,setBooks];
}
