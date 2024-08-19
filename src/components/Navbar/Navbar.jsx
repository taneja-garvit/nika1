import React, { useEffect } from 'react'
import { hamburger, logo } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { setNavOpen } from '../../store/slice';
import { Link } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch();

  const navOpen = useSelector(state => state.navOpen);

  useEffect(() => {

    const navbarEvent = (e) => {
      if (!document.querySelector('.navbar').contains(e.target)) {
        console.log(navOpen)
        dispatch(setNavOpen(false));
      }
    };

    document.addEventListener('click', navbarEvent);

    return () => document.removeEventListener('click', navbarEvent);

  }, [navOpen])

  return (
    <nav className='navbar w-full fixed top-0 bg-[#00043e]'>
      <div className="w-[90%] mx-auto flex items-center justify-between ">
        <div className="w-[7.25rem] h-20 overflow-hidden">
          <Link to="/">
          <img src={logo} alt="Logo" className='w-full h-full object-cover' />
          </Link>
        </div>

        <div className="w-[31.5px] h-[17.5px] overflow-hidden xl:hidden" onClick={() => dispatch(setNavOpen(true))}>
          <img src={hamburger} className='w-full h-full object-cover' alt="" />
        </div>

        <ul className={`flex list-none transition-all ease-in duration-300 bg-[#00043e] gap-6 py-4 xl:py-0 fixed top-0 right-0 xl:static h-screen xl:h-auto w-full xs:w-[375px] md:w-[744px] xl:w-auto flex-col xl:flex-row xl:items-center xl:justify-between ${navOpen ? 'translate-x-0' : 'translate-x-[100%]'} xl:translate-x-0`}>
          <li><Link to="/about" className='block w-[181px] bg-[#f5f5f5] text-black w-[181px py-2 rounded-xl text-2xl text-center'>About</Link></li>
          <li><Link to="/" className='block w-[181px] bg-[#f5f5f5] text-black py-2 rounded-xl text-2xl text-center'>Community</Link></li>
          <li><Link to="/" className='block w-[181px] bg-[#f5f5f5] text-black py-2 rounded-xl text-2xl text-center'>Resources</Link></li>
          <li><Link  to="/waitlist" className='block w-[181px] bg-[#ff7e00] text-black py-2 rounded-xl text-2xl text-center'>Waitlist</Link></li>
        </ul>
      </div>
    </nav>
  )

}

export default Navbar
