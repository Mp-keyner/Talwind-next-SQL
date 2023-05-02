import axios from "axios"
import PruductFrom from "../components/PruductFrom"

const Homepage = ({ products }) => {
  return (
    <div>
      <PruductFrom />

      {products.map(product => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
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