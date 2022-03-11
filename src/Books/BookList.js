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
    useEffect(()=>
    {
        setBooks([{title:1,author:'Ivan',year:50,isbn:'2384092384',description:'            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam expedita nostrum, esse non error illum labore maxime unde natus distinctio. Non esse fugiat adipisci. Magnam nesciunt dicta incidunt obcaecati error illo reprehenderit quo consequuntur corporis repellat excepturi, soluta eveniet alias maiores temporibus beatae numquam eaque. Ducimus dolores esse repellendus sun '
    ,imageUrl:'https://dictionary.cambridge.org/es-LA/images/thumb/book_noun_001_01679.jpg?version=5.0.225'
    }])
    },[]);
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
