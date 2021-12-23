import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/checkout.css';

function CheckoutForm() {
    const { register, handleSubmit } = useForm({});

    const onSubmit = ({ name, email }) => {
        alert(`Name: ${name}, Email: ${email}`);
    };
    return (
        <div className='checkout__container'>
            <div className='checkout__form'>
                <div className='heading'>Payment Details</div>
                <div className='sub-heading'>
                    Complete your purchase by providing your details.
                </div>

                <form className='inputForm' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='name' className='fieldText'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        {...register('name', { required: 'Required' })}
                        autoComplete='off'
                        placeholder='Name'
                        name='name'
                        id='name'
                    />

                    <label htmlFor='email' className='fieldText'>
                        Email address
                    </label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Email'
                        name='email'
                        id='email'
                        {...register('email', { required: 'Required' })}
                    />

                    <label htmlFor='address' className='fieldText'>
                        Delivery Address
                    </label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Address'
                        name='address'
                        id='address'
                        {...register('address', { required: 'Required' })}
                    />

                    <label className='fieldText' htmlFor='phone'>
                        Phone Number
                    </label>
                    <input
                        type='tel'
                        autoComplete='off'
                        placeholder='Phone no.'
                        name='phone'
                        id='phone'
                        {...register('phone', { required: 'Required' })}
                    />

                    <button className='payment-btn' type='submit'>
                        Payment now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm;
