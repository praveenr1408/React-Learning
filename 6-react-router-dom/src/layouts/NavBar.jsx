import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  const navActiveStyle = ({ isActive }) => (isActive ? "text-white" : "text-black")
  return (
    <nav className='flex bg-[deepskyblue] w-full py-4 justify-around font-[400] items-center'>
        <h1 onClick={()=>navigate('/')}>Logo</h1>

        <ul className='flex gap-8'>
            <NavLink to='/'
            className={navActiveStyle}
            ><li>Home</li></NavLink>
            
            <NavLink to='/about'
            className={navActiveStyle}
            ><li>About</li></NavLink>


            <NavLink to='/contact'
            className={navActiveStyle}
            ><li>Contact</li></NavLink>    
        </ul>

        <button className='cursor-pointer bg-black text-white px-8 py-2 rounded-4xl hover:bg-white hover:text-black transition-all duration-200 ease-in' 
        onClick={() => navigate('/login')}>Login</button>
    </nav>
  )
}

export default NavBar