import React, { useState } from 'react';
import './Book.scss'
function Book({prop}) {
    
    const [name, setName] = useState(prop.title);
    const [author, setAuthor] = useState(prop.author);
    const [year, setYear] = useState(prop.year);
    const [image, setImage] = useState(prop.imageUrl);
    const [isbn, setIsbn] = useState(prop.isbn);
    const [desc, setDesc] = useState(prop.description);
    return(
        <div className='book'>
            <img src={image} alt="image" />
            <div className='text'>
                <h2>{name} ({year})</h2>
                <h3>{author}</h3>
                <h4>ISBN: {isbn}</h4>

                <p>{desc.substring(0,190)}</p>
            </div>
            
        </div>
    );
}

export default Book;
