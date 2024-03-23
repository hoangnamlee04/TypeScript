import React from 'react'

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <a className='block text-teal-600' href='/'>
          <img
            className='w-[76px]'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKloK_axTEmmgQi8L68w2iuPSYj3EnDgaZLA&usqp=CAU'
            alt=''
          />
        </a>

        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <a className='text-gray-500 transition hover:text-gray-500/75' href='#'>
                  {' '}
                  Trang chủ{' '}
                </a>
              </li>

              <li>
                <a className='text-gray-500 transition hover:text-gray-500/75' href='#'>
                  {' '}
                  Giới thiệu{' '}
                </a>
              </li>

              <li>
                <a className='text-gray-500 transition hover:text-gray-500/75' href='#'>
                  {' '}
                  Sản phẩm{' '}
                </a>
              </li>

              <li>
                <a className='text-gray-500 transition hover:text-gray-500/75' href='#'>
                  {' '}
                  Tin tức{' '}
                </a>
              </li>

              <li>
                <a className='text-gray-500 transition hover:text-gray-500/75' href='#'>
                  {' '}
                  Liên hệ{' '}
                </a>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <a
                className='block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
                href='#'
              >
                Đăng nhập
              </a>

              <a
                className='hidden rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:text-gray-600/75 hover:bg-gray-400 sm:block'
                href='#'
              >
                Đăng ký
              </a>
            </div>

            <button className='block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden'>
              <span className='sr-only'>Toggle menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
