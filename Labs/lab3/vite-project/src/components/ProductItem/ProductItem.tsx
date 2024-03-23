import React from 'react'
import { Link } from 'react-router-dom'
import { product } from '~/types/Product'

type Props = { product: product }
const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div key={product.id} className='group'>
        <div className='item-product px-5 pt-[13px] pb-[26px] h-[317px] flex flex-col justify-between mt-20 transition-transform duration-300 transform '>
          <Link to={`/shop/${product.id}`}>
            <img src={product.thumbnail} alt={product.title} className='w-[230px] h-[180px]' />
          </Link>

          <div className='info-product'>
            <Link to={`/shop/${product.id}`}>
              <h3 className='color-text text-[20px]'>{product.title}</h3>
            </Link>
            <div className='reviews flex items-center my-[6px]'>
              <div className='starts text-xs'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
              </div>
              <span className='w-[1px] h-[10px] bg-slate-300 m-[6px]'></span>
              <div className='sold text-xs text-[#787878]'>Đã bán 1000+</div>
            </div>
            <div className='price color-price flex items-center text-red-500 text-[20px]'>
              <span>{product.price}</span> ₫<div className='ml-2 text-xs border border-red-500 bg-[#FFF0F1]'>-23%</div>
            </div>
            <div className='text-red-500 slogan color-price flex relative mt-1'>
              <p className='uppercase text-xs pl-1'>Xếp hạng: {product.rating}</p>
            </div>
            <div className='mt-6 ml-10'>
              <Link
                to={`/shop/${product.id}`}
                className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"'
              >
                <span className='absolute inset-0 border border-red-600 group-active:border-red-500'></span>
                <span className='block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1'>
                  Mua Hàng
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
