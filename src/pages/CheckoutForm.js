import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/checkout.css';

function CheckoutForm() {
    // const { register, handleSubmit, errors } = useForm({});

    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    return (
        <div className='hero'>
            <div className='checkout__container'>
                <div className='checkout__form'>
                    <div className='heading'>Payment Details</div>
                    <div className='sub-heading'>
                        Complete your purchase by providing your details.
                    </div>

                    <form className='inputForm'>
                        {/* <label className='fieldText'>Full Name</label> */}
                        <input type='text' placeholder='Name' name='name' />

                        {/* <label className='fieldText'>Email address</label> */}
                        <input type='text' placeholder='Email' name='email' />

                        {/* <label className='fieldText'>Delivery Address</label> */}
                        <input type='text' placeholder='Address' />

                        {/* <label className='fieldText'>Phone Number</label> */}
                        <input type='text' placeholder='Phone no.' />

                        <button className='payment-btn' type='submit'>
                            Payment now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
