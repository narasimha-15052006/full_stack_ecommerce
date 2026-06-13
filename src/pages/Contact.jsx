import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-20'>

        <img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt=""
        />

        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-gray-700'>
            Our Store
          </p>

          <p className='text-gray-500'>
            522503 Mangalagiri <br />
            Guntur District, Andhra Pradesh, INDIA
          </p>

          <p className='text-gray-500'>
            Tel: (+91) 9030930009 <br />
            Email: admin@forever.com
          </p>

          <p className='font-semibold text-xl text-gray-700'>
            Why Connect With Us?
          </p>

          <p className='text-gray-500 max-w-md'>
            We are committed to providing exceptional customer service and a
            seamless shopping experience. Whether you have questions about an
            order, need product recommendations, or simply want to share your
            feedback, our team is always happy to help.
          </p>

          <p className='text-gray-500 max-w-md'>
            Your satisfaction is our priority. Reach out anytime and we'll do
            our best to assist you quickly and efficiently.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Get In Touch
          </button>

        </div>

      </div>

    </div>
  )
}

export default Contact