import axios from 'axios';
import { useEffect , useState} from 'react';
import {OrderSummary} from '../checkout/OrderSummary'
import {PaymentSummary} from '../checkout/PaymentSummary'



import './CheckoutPage.css'
import './checkout-header.css'
export function CheckoutPage({cart}){

    const[deliverOptions, setDeliverOptions] = useState([])
    const[paymentSummary, setPaymentSummary] = useState([null])

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')

        .then((response)=>{
            setDeliverOptions(response.data);
        });

        axios.get('/api/payment-summary')

        .then((response)=>{
            setPaymentSummary(response.data);
        });
    })

    return(
        <>
            <title>Checkout</title>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliverOptions={deliverOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    )
}














