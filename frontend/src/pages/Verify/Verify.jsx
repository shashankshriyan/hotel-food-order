import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const navigate = useNavigate();
    const { url } = useContext(StoreContext);

    const verifyPayment = async() => {
        const response = await axios.post(url+"/api/order/verify", { success, orderId })
        if(response.data.success){
            navigate("/myorders");

        }
        else{
            navigate("/")
        }

    }
    useEffect(()=>{
        verifyPayment()
    },[])
    return (

        <div className='verify'>
            <div className="spinner"></div>

        </div>
    )
}

export default Verify
