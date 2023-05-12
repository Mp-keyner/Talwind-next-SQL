import { Layouy } from '@/components/Layouy'
import axios from 'axios'
import React from 'react'
import { useRouter } from "next/router";
import { toast } from 'react-toastify';

const ProductPage = ({ products }) => {

  const router = useRouter()

  console.log({ products })

  const handleDelete = async (id) => {
    try {
      await axios.delete('/api/products/' + id)
      router.push('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Layouy>
      <div className='h-100 w-30 flex flex-col items-center justify-start rounded shadow-2xl sm:w-30 sm:justify-center sm:flex-row sm:h-60'>
        <div className='mx-10 p-5 rounded shadowx-md'>
          <h1 className='text-lg font-semibold my-7 '>{products.name}</h1>
          <p>{products.description}</p>
          <h2 className='text-lg font-semibold'>{products.price}</h2>
        </div>

        <button className='btn bg-red-600 p-1 w-20 h-10 m-3 rounded shadowx-md hover:bg-red-500'
          onClick={() => handleDelete(products.id)}>
          delete
        </button>

        <button className='btn bg-green-600 p-1 w-20 h-10 m-3 rounded shadowx-md hover:bg-green-500'

          onClick={() => router.push('/products/Update/' + products.id)}>
          Update
        </button>
      </div>
    </Layouy>
  )
}

export const getServerSideProps = async (context) => {

  const { data: products } = await axios.get('http://localhost:3000/api/products/' + context.query.id)

  return {
    props: {
      products,
    }
  }

}

export default ProductPage
