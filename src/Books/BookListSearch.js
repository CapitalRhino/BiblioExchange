import React, { useState, useEffect } from 'react';
import Book from './Book';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Book.scss"

import axios from '../api/axios';

function BookListSearch({title}) {
    const [books, setBooks] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const res = await axios.get(`/Search/Book/title`,
                    {
                        params: {
                            query: title,
                            curPage: 0,
                            pageSize: 20
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
                {books.map((bok, i) => {
                    const link = `/Book/${bok.id}`
                    return (
                        <Link key={bok.id}className='link' to={link}>
                            <Book  prop={bok} />
                        </Link>
                    )
                })}

            </div></>
    );
}

export default BookListSearch;