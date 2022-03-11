import React,{useState,useEffect} from 'react';
import Book from './Book';
import {Link, useLocation,useNavigate} from 'react-router-dom'
import "./Book.scss"
const BOOKS_URL = 'Book/all'


function BookListSearch() {
    const [books, setBooks] = useState([]);
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
            {books.map((book,i)=>{
                const link = `/Book/${i}`
                return (
                    <Link to={link}>
                    <Book key={i} prop={book}/>
                    </Link>
                )
            })}
          
        </div></>
    );
}

export default BookListSearch;