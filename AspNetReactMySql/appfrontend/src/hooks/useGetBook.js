import React, { useState,useEffect } from 'react';
const url = 'https://localhost:7260/Book/all'
export default function useGetBook() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async()=>
        {
            const res = await fetch(url,{method:'GET',
            });
            const books = await res.json();
            setBooks(books);
        };
        fetchData();
    }, []);

    return [books,setBooks];
}
