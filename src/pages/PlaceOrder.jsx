import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const navigate = useNavigate()

  const placeOrder = (e) => {
    e.preventDefault()
    navigate('/orders')
  }

  return (
    <form
      onSubmit={placeOrder}
      className='flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t'
    >

      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='First Name'
            required
          />

          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='Last Name'
            required
          />
        </div>

        <input
          className='border border-gray-300 rounded py-2 px-4'
          type='email'
          placeholder='Email Address'
          required
        />

        <input
          className='border border-gray-300 rounded py-2 px-4'
          type='text'
          placeholder='Street'
          required
        />

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='City'
            required
          />

          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='State'
            required
          />
        </div>

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='number'
            placeholder='Zipcode'
            required
          />

          <input
            className='border border-gray-300 rounded py-2 px-4 w-full'
            type='text'
            placeholder='Country'
            required
          />
        </div>

        <input
          className='border border-gray-300 rounded py-2 px-4'
          type='number'
          placeholder='Phone'
          required
        />

      </div>

      {/* Right Side */}
      <div className='mt-8'>

        <div className='min-w-80'>

          <div className='text-2xl'>
            <Title text1={'CART '} text2={'TOTALS'} />
          </div>

          <div className='flex flex-col gap-2 mt-2 text-sm'>

            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>₹100</p>
            </div>

            <hr />

            <div className='flex justify-between'>
              <p>Shipping Fee</p>
              <p>₹10</p>
            </div>

            <hr />

            <div className='flex justify-between'>
              <b>Total</b>
              <b>₹110</b>
            </div>

          </div>

        </div>

        {/* Payment Method */}

        <div className='mt-12'>

          <div className='text-xl mb-3'>
            <Title text1={'PAYMENT '} text2={'METHOD'} />
          </div>

          <div className='flex gap-3 flex-col lg:flex-row'>

            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <input type='radio' name='payment' />
              <img
                className='h-5 mx-4'
                src={assets.stripe_logo}
                alt='Stripe'
              />
            </div>

            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <input type='radio' name='payment' />
              <img
                className='h-5 mx-4'
                src={assets.razorpay_logo}
                alt='Razorpay'
              />
            </div>

            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <input type='radio' name='payment' defaultChecked />
              <p className='text-gray-500 text-sm font-medium mx-4'>
                CASH ON DELIVERY
              </p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>

            <button
              type='submit'
              className='bg-black text-white px-16 py-3 text-sm'
            >
              PLACE ORDER
            </button>

          </div>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder