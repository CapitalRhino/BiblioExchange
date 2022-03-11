import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from '../api/axios';
import './BookPage.scss'
function BookPage() {
    let params = useParams();
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [lang, setLang] = useState('')
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    const [isbn, setIsbn] = useState('');
    const [desc, setDesc] = useState('');
    const [nat, setNat] = useState('');
    const [publ, setPubl] = useState('');
    const [genre, setGenre] = useState('')
    const [err, setErr] = useState('');
    useEffect(async () => {
        try {
            const res = await axios.get(`Book?id=${params.id}`)
            if (res.status === 204) {
                setErr('NotFound')
            } else {
                setName(res.data.title);
                setAuthor(res.data.author);
                setIsbn(res.data.isbn);
                setDesc(res.data.description);
                setYear(res.data.year);
                setLang(res.data.language);
                setNat(res.data.nationality);
                setImage(res.data.imageUrl);
                setPubl(res.data.publisher);
                setGenre(res.data.genre);
            }

        } catch (error) {
            setErr('NotFound')
        }

    }, []);
    return (
        <section className='Page'>
            {!err
                ? <article>
                    <div className='title-section'>
                        <label className='title'>{name}({year})</label> <br />
                        <label className='values'>{author}</label>
                    </div>
                    <div className='info'>
                        <img src={image} alt="Not image found" />
                        <div className='text'><div>
                            <label htmlFor="isbn">Isbn:</label>
                            <label className='values'>{isbn}</label>
                        </div>
                            <div>
                                <label htmlFor="genre">Genre:</label>
                                <label className='values'>{genre}</label>
                            </div>
                            <div>
                                <label htmlFor="lang">Language:</label>
                                <label className='values'>{lang}</label>
                            </div>
                            <div>
                                <label htmlFor="nat">Nationality:</label>
                                <label className='values'>{nat}</label>
                            </div>
                            <div>
                                <label htmlFor="publisher">Publisher:</label>
                                <label className='values'>{publ}</label>
                            </div>
                        </div>
                    </div>
                    <div className='desc'>
                        <label htmlFor="desc">Desription:</label>
                        <p className='values'>{desc}</p>
                    </div>
                </article>
                : <article>Book not found!</article>}
        </section>
    )
}

export default BookPage