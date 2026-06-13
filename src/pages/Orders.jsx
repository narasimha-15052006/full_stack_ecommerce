import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {

  const { products, currency } = useContext(ShopContext)

  const orderProduct = products[0]

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>

      <div className='mt-8'>

        <div className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

          <div className='flex items-start gap-6'>

            <img
              className='w-16 sm:w-20'
              src={orderProduct.image[0]}
              alt=""
            />

            <div>

              <p className='sm:text-base font-medium'>
                {orderProduct.name}
              </p>

              <div className='flex items-center gap-3 mt-1 text-sm'>
                <p>{currency}{orderProduct.price}</p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
              </div>

              <p className='mt-1 text-sm'>
                Date: {new Date().toDateString()}
              </p>

              <p className='text-sm'>
                Payment: COD
              </p>

            </div>

          </div>

          <div className='flex items-center gap-2'>
            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
            <p className='text-sm md:text-base'>
              Order Placed
            </p>
          </div>

          <button className='border px-4 py-2 text-sm font-medium rounded-sm'>
            Track Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default Orders