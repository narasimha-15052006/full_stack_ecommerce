import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {
    products,
    currency,
    cartItems,
    delivery_fee,
    removeFromCart
  } = useContext(ShopContext)

  const cartData = []

  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {
      if (cartItems[itemId][size] > 0) {
        cartData.push({
          _id: itemId,
          size,
          quantity: cartItems[itemId][size]
        })
      }
    }
  }

  const getSubtotal = () => {
    let total = 0

    cartData.forEach((item) => {
      const product = products.find(
        (p) => p._id === item._id
      )

      if (product) {
        total += product.price * item.quantity
      }
    })

    return total
  }
  const navigate = useNavigate()

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR '} text2={'CART'} />
      </div>

      <div>

        {
          cartData.map((item, index) => {

            const productData = products.find(
              (product) => product._id === item._id
            )

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
              >

                <div className='flex items-start gap-6'>

                  <img
                    className='w-16 sm:w-20'
                    src={productData.image[0]}
                    alt=""
                  />

                  <div>

                    <p className='text-xs sm:text-lg font-medium'>
                      {productData.name}
                    </p>

                    <div className='flex items-center gap-5 mt-2'>

                      <p>
                        {currency}{productData.price}
                      </p>

                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
                        {item.size}
                      </p>

                    </div>

                  </div>

                </div>

                <input
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                  type="number"
                  min={1}
                  value={item.quantity}
                  readOnly
                />

                <img
                  onClick={() => removeFromCart(item._id, item.size)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt=""
                />

              </div>
            )
          })
        }

      </div>

      {/* Cart Totals */}

      <div className='flex justify-end my-20'>

        <div className='w-full sm:w-[450px]'>

          <div className='text-2xl'>
            <Title text1={'CART '} text2={'TOTALS'} />
          </div>

          <div className='flex flex-col gap-2 mt-2 text-sm'>

            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{currency}{getSubtotal()}</p>
            </div>

            <hr />

            <div className='flex justify-between'>
              <p>Shipping Fee</p>
              <p>{currency}{delivery_fee}</p>
            </div>

            <hr />

            <div className='flex justify-between'>
              <b>Total</b>
              <b>
                {currency}
                {
                  getSubtotal() === 0
                    ? 0
                    : getSubtotal() + delivery_fee
                }
              </b>
            </div>

          </div>

          <div className='w-full text-end mt-8'>

            <button 
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm px-8 py-3'>
              PROCEED TO CHECKOUT
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart