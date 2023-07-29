import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import Menu from '../assets/images/icon-menu.svg'
import menuClose from '../assets/images/icon-menu-close.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="py-4 flex justify-between items-center my-4 md:mt-8">
                <img src={logo} alt="logo" className="w-10 md:w-12" />
                {
                    toggle ? <img src={menuClose} onClick={toggleMenu} alt="menu-close" className="w-6 md:hidden z-20" /> : <img src={Menu} alt="menu" onClick={toggleMenu} className="w-8 md:hidden" />
                }
                <ul className='hidden md:flex gap-10 justify-center items-center text-dark-grayish-blue'>
                    <li className='hover:text-soft-orange'>Home</li>
                    <li className='hover:text-soft-orange'>New</li>
                    <li className='hover:text-soft-orange'>Popular</li>
                    <li className='hover:text-soft-orange'>Trending</li>
                    <li className='hover:text-soft-orange'>Categories</li>
                </ul>
                <div className={`md:hidden absolute top-0 right-0 w-full h-screen ${toggle ? "visible" : "hidden"} bg-[#00001a80]`}>
                </div>
                    <ul className={`md:hidden absolute flex w-[70%] flex-col ${toggle ? "visible" : "hidden"} top-0 z-10 right-0 bg-off-white h-screen gap-4 py-28 px-12 text-dark-grayish-blue`}>
                        <li className='hover:text-soft-orange'>Home</li>
                        <li className='hover:text-soft-orange'>New</li>
                        <li className='hover:text-soft-orange'>Popular</li>
                        <li className='hover:text-soft-orange'>Trending</li>
                        <li className='hover:text-soft-orange'>Categories</li>
                    </ul>
            </div>
        </>
    )
}

export default Navbar