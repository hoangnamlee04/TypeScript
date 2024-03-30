import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
//

import { createProduct, getProducts } from './apis/product'
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
//
import { Product } from './types/Product'
import ProductDetail from './pages/ProductDetail'
//
import Shop from './pages/Shop'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'

const App = () => {
  const navigate = useNavigate()
  ///// Hiển thị
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  /////
  const handleAddProduct = (product: Product) => {
    ;(async () => {
      const data = await createProduct(product)
      setProducts([...products, data])
    })()
    navigate('/admin')
  }
  return (
    <>
      <Header />
      <main className='mt-20 bg-white color-text '>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          <div className='content grow'>
            <Routes>
              {/* // */}
              <Route index element={<Home products={products} />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/about' element={<About />} />
              <Route path='/shop/:id' element={<ProductDetail />} />

              {/* admin */}
              <Route path='/admin'>
                <Route index element={<Dashboard products={products} />} />
                <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
              </Route>

              {/* /404/ */}
              <Route path='*' element={<NotFound />} />
              {/* // */}
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
