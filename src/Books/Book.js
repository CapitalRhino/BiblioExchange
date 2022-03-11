import React, { useState } from 'react';
import './Book.scss'
function Book({prop}) {
    
    const [name, setName] = useState(prop.title);
    const [author, setAuthor] = useState(prop.author);
    const [year, setYear] = useState(prop.year);
    const [image, setImage] = useState(prop.imageUrl);
    const [isbn, setIsbn] = useState(prop.isbn);
    const [desc, setDesc] = useState(prop.description);
    console.log();
    return(
        <div className='book'>
            <img src={image} alt="image" />
            <div className='text'>
                <h1>{name}</h1>
                <h2>{author}</h2>
                <h3>{isbn}</h3>
                <h3>{year}</h3> 
                <p>{desc}</p>
            </div>
            
        </div>
    );
}

export default Book;
