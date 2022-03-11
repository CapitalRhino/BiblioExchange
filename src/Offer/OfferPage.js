import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from '../api/axios';
import './../Books/BookPage.scss'
import { faEdit, faSave,faCancel} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './OfferPage.scss'
const UpdateOffer = async (email) => {

}
function OfferPage() {
    let params = useParams();
    const [name, setName] = useState('');
    const [edit, setEdit] = useState('')
    const [user, setUser] = useState('');
    const [price, setPrice] = useState('')
    const [upload, setUpload] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [err, setErr] = useState('');
    useEffect(async () => {
        try {
            const res = await axios.get(`Offer?id=${params.id}`)
            if (res.status === 204) {
                setErr('NotFound')
            } else {
                setName(res.data.book.title);
                setUser(res.data.biblioUser.userName);
                setPrice(res.data.price);
                setDesc(res.data.description);
                setUpload(res.data.uploadTime)
                setImage(res.data.imageUrl);
            }

        } catch (error) {
            setErr('NotFound')
        }

    }, []);
    return (<section className='Page'>
        {!err
            ? <article>
                <div className='title-section'>
                    <label className='title'>{name}</label> <br />
                </div>
                <div className='info'>
                    <img src={image} alt="Not image found" />
                    <div className='text'><div>
                        <label htmlFor="price">Price:</label>
                        <input className='price' onChange={(e)=>setPrice(e.target.value)}value={price}/>
                    </div>
                        <div>
                            <label htmlFor="owner">Owner:</label>
                            <label className='values'>{user}</label>
                        </div>
                        <div>
                            <label htmlFor="upload">Upload on:</label>
                            <label className='values'>{upload}</label>
                        </div> <div className='desc'>
                            <label htmlFor="desc">Desription:</label><br />
                            <textarea className='description'>{desc}</textarea>
                        </div>
                        {
                edit
                    ? <div className='edit-buttons'><button className='confirm' onClick={() => { UpdateOffer(); setEdit(false) }}>
                       Save<FontAwesomeIcon icon={faSave}/>
                    </button>
                        <button className='cancel' onClick={() => { setEdit(false)}}>
                            Cancel <FontAwesomeIcon className='invalid' icon={faCancel} />
                            </button>
                    </div>
                    : <div className='edit-buttons'><button className='edit' onClick={() => { setEdit(true) }}>Edit <FontAwesomeIcon icon={faEdit} /></button></div>
            }
                    </div>
                </div>


            </article>
            : <article>Offer not found!</article>}
    </section>
    )
}

export default OfferPage