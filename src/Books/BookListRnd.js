import React,{useState,useEffect} from 'react';
import Book from './Book';
import {useLocation,useNavigate,Link} from 'react-router-dom'
import "./Book.scss"
import axios from '../api/axios';
function BookListRnd() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await axios.get(`Book/rnd`,
                    {
                        params: {
                            n: 5,
                        },
                        signal: controller.signal
                    })
                const data = res?.data
                if (data != []) {
                    setBooks(data)
                }
            } catch (err) {
                navigate('/', { state: { from: location }, replace: true });
            }
        };
        fetchData();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);
  return (
    <>
        <div className='booklist'>
            {books.map((book,i)=>{
                const link = `/Book/${book.id}`
                return (
                    
                    <Link key={book.id} className='link' to={link}>
                    <Book  prop={book}/>
                    </Link>
                    
                )
            })}
          
        </div></>
  )
}

export default BookListRnd