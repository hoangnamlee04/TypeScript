// import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'

import { Route, Routes } from 'react-router-dom'
import Shop from './pages/shop'

function App() {
  return (
    <>
      <Header />
      <main className='mt-8 bg-white color-text'>
        <div className='max-w-screen-xl mx-auto pt-[14px] flex pb-16'>
          <div className='content grow'>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/shop' element={<Shop />} />
              <Route path='/shop/:id' element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
