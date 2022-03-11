import React,{useState,useEffect} from 'react';
import Book from './Book';
import {useLocation,useNavigate} from 'react-router-dom'
import "./Book.scss"
const BOOKS_URL = 'Book/all'


function BookList() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    // useEffect(() => {
    //     let isMounted = true;
    //     const controller = new AbortController();
    //     const fetchData = async()=>
    //     {
    //         try {
    //             const books = await protectedAxios.get(BOOKS_URL,{signal: controller.signal});
    //             isMounted && setBooks(books?.data);
    //         }catch (err) {
    //             navigate('/login', { state: { from: location }, replace: true });
    //         } 
    //     };
    //     fetchData();
    //     return () => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // }, []);
    return(
        <>
        <div className='booklist'>
            {books.map((book,i)=>{
                const {id,name,author,year,imageUrl} = book;
                return (
                    <Book key={i} prop={book}/>
                )
            })}
          
        </div></>
    );
}

export default BookList;
