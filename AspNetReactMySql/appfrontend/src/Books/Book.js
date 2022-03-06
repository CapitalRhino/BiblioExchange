import React, { useState } from 'react';
function Book(props) {
    const [name, setName] = useState(props.name);
    const [author, setAuthor] = useState(props.author);
    const [year, setYear] = useState(props.year);
    const [image, setImage] = useState(props.imageUrl);
    return(
        <div className='book'>
            <div className='text'>
                <h1>{name}</h1>
                <h2>{author}</h2>
                <h4>{year}</h4> 
            </div>
            <img src={image} alt="image" />
        </div>
    );
}

export default Book;
