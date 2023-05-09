import { Layouy } from '@/components/Layouy'
import axios from 'axios'
import React from 'react'
import { useRouter } from "next/router";

const ProductPage = ({ products }) => {

  const router = useRouter()

  console.log({ products })

  const handleDelete = async (id) => {
    await axios.delete('/api/products/' + id)
    router.push('/')
  }

  return (
    <Layouy>
      <div className='grid gap-3'>
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <h2>{products.price}</h2>

        <button className='btn bg-red-600 p-1 rounded shadowx-md hover:bg-red-400'
          onClick={() => handleDelete(products.id)}>
          delete
        </button>

        <button className='btn bg-green-600 p-1 rounded shadowx-md hover:bg-green-400'

          onClick={() => router.push('/products/update/' + products.id)}>
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
