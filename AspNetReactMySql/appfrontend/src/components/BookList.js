import React from 'react';
import useGetBook from '../hooks/useGetBook';
import Book from './Book';

function BookList() {
    const [books,setBooks] = useGetBook();
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
