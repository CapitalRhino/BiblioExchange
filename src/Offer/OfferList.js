import React,{useState,useEffect} from 'react';
import Offer from './Offer';
import {useLocation,useNavigate} from 'react-router-dom'
import useProtectedAxios from '..//Auth/useProtectedAxios';
import "./Offer.scss"
import axios from '../api/axios';
const OFFER_URL = 'Offer/all';

function OfferList() {
    const [offers, setOffer] = useState([])
const navigate = useNavigate();
const location = useLocation();
useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const fetchData = async()=>
        {
            try {
                const offers = await axios.get(BOOKS_URL,{signal: controller.signal});
                isMounted && setOffer(offers?.data);
            }catch (err) {
                navigate('/login', { state: { from: location }, replace: true });
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
        <div className='offerlist'>
            {offers.map((offer,i)=>{
                return (
                    <Book key={i} prop={offer}/>
                )
            })}
          
        </div></>
  )
}

export default OfferList