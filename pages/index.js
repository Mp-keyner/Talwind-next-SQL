import axios from "axios"
import { Layouy } from "../components/Layouy";
import Link from "next/link"


const Homepage = ({ products }) => {
  return (
    <Layouy>
      <h1>hello</h1>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="border border-gray-200 shadow-md p-2 m-2">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}

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