import React, { useState } from 'react';
import './Book.scss'
function Offer({prop}) {
    const [name, setName] = useState(prop.title);
    const [phone, setPhone] = useState(prop.phone);
    const [image, setImage] = useState(prop.imageUrl);
    const [price, setPrice] = useState(prop.price);
    const [desc, setDesc] = useState(prop.description);
    console.log();
    return(
        <div className='offer'>
            <Link className='link'>
            <img src={image} alt="image" />
            <div className='text'>
                <h1>{name}</h1>
                <h2>{phone}</h2>
                <h3>{price}</h3>
                <p>{desc}</p></div>
            </Link>
        </div>
    );
}

export default Book;
