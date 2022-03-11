import React,{useState,useEffect} from 'react';
import Book from './Book';
import {useLocation,useNavigate} from 'react-router-dom'
import useProtectedAxios from '../../Auth/useProtectedAxios';
import "./Book.scss"
const BOOKS_URL = 'Book/all'


function BookList() {
    const [books, setBooks] = useState([]);
    const protectedAxios = useProtectedAxios();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchData = async()=>
        {
            try {
                const books = await protectedAxios.get(BOOKS_URL,{signal: controller.signal});
                isMounted && setBooks(books?.data);
            }catch (err) {
                navigate('/login', { state: { from: location }, replace: true });
            } 
        };
        fetchData();
        return () => {
            isMounted = false;
            controller.abort();
        }
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
