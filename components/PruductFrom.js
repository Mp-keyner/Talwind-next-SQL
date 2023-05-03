import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function PruductFrom() {

    const [products, setProducts] = useState({
        name: "",
        description: "",
        price: 0,
    });
    const router = useRouter()

    const handleSubit = async e => {
        e.preventDefault()
        console.log('Creating Pruduct')
        const res = await axios.post('/api/products', products)
        console.log(res)
        router.push('/')
    }

    const handleChange = ({ target: { name, value } }) => {
        setProducts({ ...products, [name]: value })
    }

    return (
        <div className='w-full max-w-xs'>
            <form onSubmit={handleSubit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 '>

                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700' />
                <label htmlFor='price'>Price:</label>
                <input type='text' name='price' onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700' />
                <label htmlFor='description'>Description:</label>
                <textarea name='description' rows="2" onChange={handleChange}
                    className='shadow border rounded py-2 px-3 text-gray-700' ></textarea>
                <button className='bg-green-500 p-3 rounded  hover:bg-green-700 shadow-md'>Save product</button>
            </form>
        </div>
    )
}

export default PruductFrom
