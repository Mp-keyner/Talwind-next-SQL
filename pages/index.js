import axios from "axios"
import { Layouy } from "../components/Layouy";
import Link from "next/link"
import { useRouter } from "next/router";


const Homepage = ({ products }) => {
  const router = useRouter()
  return (
    <Layouy>
      <h1>hello</h1>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="border border-gray-200 shadow-md p-2 m-2 hover:shadow-xl ">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
      <button
        onClick={() => router.push('/New')}
        className="bg-blue-700 p-2 rounded m-2 hover:bg-blue-500">
        New Product
      </button>
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