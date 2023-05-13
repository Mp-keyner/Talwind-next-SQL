import axios from "axios"
import { Layouy } from "../components/Layouy";
import Link from "next/link"
import { useRouter } from "next/router";


const Homepage = ({ products }) => {
  const router = useRouter()
  return (
    <Layouy>
      <h1 className="text-lg font-semibold text-center text-3xl my-10 font-bold sm:my-10">🛒 List of products 🛒</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {products.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-gray-200 p-4 max-w-50% mx-auto rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <h1 className="text-lg font-semibold">💳 {product.name}</h1>
              <p className="text-lg font-semibold">💰 $.{product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}

      </div>
      {/* <button
        onClick={() => router.push('/New')}
        className="bg-blue-700 p-2 rounded m-2 hover:bg-blue-500">
        New Product 
      </button> */}



    </Layouy>
  )
}

export const getServerSideProps = async (context) => {

  const { data: products } = await axios.get('http://localhost:3000/api/products')

  return {
    props: {
      products,
    }
  }
}

export default Homepage