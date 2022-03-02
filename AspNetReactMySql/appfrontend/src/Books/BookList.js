import React,{useState,useEffect} from 'react';
import Book from './Book';
import useProtectedAxios from '../Auth/useProtectedAxios';
const BOOKS_URL = 'Book/all'


function BookList() {
    const [books, setBooks] = useState([]);
    const protectedAxios = useProtectedAxios();
    useEffect(() => {
        const fetchData = async()=>
        {
            try {
                const books = await protectedAxios.get(BOOKS_URL)
                setBooks(books?.data);
            }catch (err) {
                
            } 
        };
        fetchData();
    }, []);
    return(
        <>
        <div className='booklist'>
            {books.map(book=>{
                const {id,name,author,year,imageUrl} = book;
                return (
                    <Book key={id} name={name} author={author} year={year} imageUrl={imageUrl}/>
                )
            })}
        </div></>
    );
}

export default BookList;
