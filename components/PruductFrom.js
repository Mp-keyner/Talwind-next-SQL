import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

function PruductFrom() {

    const [products, setProducts] = useState({
        name: "",
        description: "",
        price: 0,
    });
    const router = useRouter()

    const handleSubit = async e => {
        e.preventDefault()

        try {
            if (router.query.id) {

                await axios.put('/api/products/' + router.query.id, products)
                toast.success('Product updated successfully')
            } else {

                await axios.post('/api/products/', products)
                toast.success('Product save successfully')
            }

            router.push('/')
        } catch (error) {
            console.log(error)
            toast.error('Verifica que todos los datos esten bien !ERROR¡ ' + error.message)
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setProducts({ ...products, [name]: value })
    }

    useEffect(() => {

        const getProduct = async () => {
            const { data } = await axios.get('/api/products/' + router.query.id)
            setProducts({
                name: data.name,
                description: data.description,
                price: data.price
            })
        }

        if (router.query?.id) {
            getProduct(router.query.id)
        }
    }, [router.query.id])
    return (
        <div className='w-full max-w-xs'>
            <form onSubmit={handleSubit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 '>

                <label htmlFor='name'>Name:</label>

                <input
                    type='text'
                    name='name'
                    onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700'
                    value={products.name}
                />
                <label htmlFor='price'>Price:</label>

                <input
                    type='text'
                    name='price'
                    onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700'
                    value={products.price}
                />

                <label htmlFor='description'>Description:</label>

                <textarea
                    name='description'
                    rows="2"
                    onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700'
                    value={products.description}
                ></textarea>
                <button className='bg-green-500 p-3 rounded  hover:bg-green-700 shadow-md'>
                    {
                        router.query.id ? 'UpDate Product' : 'Save Product'
                    }
                </button>
            </form>
        </div>
    )
}

export default PruductFrom
