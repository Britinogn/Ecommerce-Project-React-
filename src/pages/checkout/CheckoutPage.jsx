import axios from 'axios';
import { useEffect , useState} from 'react';
import {OrderSummary} from '../checkout/OrderSummary'
import {PaymentSummary} from '../checkout/PaymentSummary'



import './CheckoutPage.css'
import './checkout-header.css'
export function CheckoutPage({cart , loadCart}){

    const[deliveryOptions, setDeliveryOptions] = useState([])
    const[paymentSummary, setPaymentSummary] = useState([null])


    useEffect(()=> {
        const fetchCheckoutData = async () =>{
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);
        
            response = await  axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        
        }


        fetchCheckoutData();
    }, [cart]);

    return(
        <>
            <title>Checkout</title>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    )
}














