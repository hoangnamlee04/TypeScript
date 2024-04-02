import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-white fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a className='block text-teal-600' href='#'>
          <span className='sr-only'>Home</span>
          <NavLink to='/'>
            {' '}
            <img
              className='w-[50px]'
              src='data:image/png;base64,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'
              alt=''
            />
          </NavLink>
        </a>
        {/* Menu */}
        <div className='flex flex-1 items-center justify-end md:justify-between'>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-sm'>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/'>
                  {' '}
                  Home{' '}
                </NavLink>
              </li>

              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/shop'>
                  {' '}
                  shop{' '}
                </NavLink>
              </li>

              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/login'>
                  {' '}
                  Login{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/register'>
                  {' '}
                  Register{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/about'>
                  {' '}
                  About{' '}
                </NavLink>
              </li>
              <li>
                <NavLink className='text-gray-500 transition hover:text-gray-500/75 font-semibold' to='/admin'>
                  {' '}
                  admin{' '}
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Tìm kiếm */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Tìm kiếm...'
              className='border border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none'
            />
            <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
              <svg className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M10 4C6.686 4 4 6.686 4 10c0 3.313 2.686 6 6 6 1.406 0 2.688-.484 3.719-1.281l5.281 5.281 1.438-1.438L11.719 10A5.937 5.937 0 0 0 10 10zm0 2a3.968 3.968 0 0 1 1.469.281l2.906 2.906A3.96 3.96 0 0 1 16 10c0-2.219-1.781-4-4-4s-4 1.781-4 4a3.968 3.968 0 0 1 .281-1.469L5.719 6.781A3.96 3.96 0 0 1 10 6zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' />
              </svg>
            </button>
          </div>
          {/* ĐĂng nhập */}
          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4'>
              <a
                className='hidden rounded-md px-3 py-2.5 text-[20px] font-medium text-gray-600 transition hover:text-red-700 sm:block'
                href='#'
              >
                <i className='fa-solid fa-user '></i>
              </a>

              <a
                className='hidden rounded-md px-3 py-2.5 text-[20px] font-medium text-gray-600 transition hover:text-red-700 sm:block'
                href='#'
              >
                <i className='fa-solid fa-cart-shopping'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
