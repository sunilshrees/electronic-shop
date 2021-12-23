import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/checkout.css';

function CheckoutForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

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
                        autoComplete='off'
                        placeholder='Name'
                        name='name'
                        id='name'
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />
                    {errors?.name && (
                        <p className='error'>{errors.name.message}</p>
                    )}
                    <label htmlFor='email' className='fieldText'>
                        Email address
                    </label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Email'
                        name='email'
                        id='email'
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email',
                            },
                        })}
                    />

                    {errors?.email && (
                        <p className='error'>{errors.email.message}</p>
                    )}

                    <label htmlFor='address' className='fieldText'>
                        Delivery Address
                    </label>
                    <input
                        type='text'
                        autoComplete='off'
                        placeholder='Address'
                        name='address'
                        id='address'
                        {...register('address', {
                            required: 'Address is required',
                        })}
                    />
                    {errors?.address && (
                        <p className='error'>{errors.address.message}</p>
                    )}

                    <label className='fieldText' htmlFor='phone'>
                        Phone Number
                    </label>
                    <input
                        type='tel'
                        autoComplete='off'
                        placeholder='Phone no.'
                        name='phone'
                        id='phone'
                        {...register('phone', {
                            required: 'Phone no. is required',
                            pattern: {
                                value: /^((\\+91-?)|0)?[0-9]{10}$/,
                                message: 'Please enter a valid Phone number',
                            },
                        })}
                    />
                    {errors?.phone && (
                        <p className='error'>{errors.phone.message}</p>
                    )}

                    <button className='payment-btn' type='submit'>
                        Payment now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm;
