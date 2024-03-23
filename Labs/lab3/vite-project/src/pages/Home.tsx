import Banner from '~/components/Banner'
import ProductList from '~/components/ProductList'
const Home = () => {
  return (
    <>
      <Banner />
      <div className='grid grid-cols-4 gap-4 mt-10 ml-10'>
        <ProductList />
      </div>
    </>
  )
}

export default Home
