import { NavLink } from "react-router-dom"
import { useState } from "react"

const Nav = () => {
    const [showMenu, setshowMenu] = useState(false)
    const handler = () => {
        setshowMenu(!showMenu);
    }
    const closeMenu = () => {
        setshowMenu(false);
    }
    return (
        <>
            <div className="nav flex justify-center">
                <div className="navBar  flex items-center  list-none">
                    <div className={`${showMenu ? "menu-mobile" : "menu-window"} navLi`} >

                        <NavLink to="/" className={({ isActive }) =>
                            `navA  text-[1.2rem] font-thin hover:cursor-pointer ${isActive ? 'text-[#FFD586] border-b-2' : ''}`} onClick={closeMenu} >
                            <i className="ri-home-3-line"></i> Home
                        </NavLink>

                        <NavLink to="/Product" className={({ isActive }) =>
                            `navA  text-[1.2rem] font-thin hover:cursor-pointer ${isActive ? 'text-[#FFD586] border-b-2' : ''}`} onClick={closeMenu} >
                            <i className="ri-discount-percent-fill"></i>Product
                        </NavLink>

                        <NavLink to="/Blog" className={({ isActive }) =>
                            `navA  text-[1.2rem] font-thin hover:cursor-pointer ${isActive ? 'text-[#FFD586] border-b-2' : ''}`} onClick={closeMenu} >
                            <i className="ri-blogger-line"></i>Blog
                        </NavLink>

                        <NavLink to="/cart" className={({ isActive }) =>
                            `navA  text-[1.2rem] font-thin hover:cursor-pointer ${isActive ? 'text-[#FFD586] border-b-2' : ''}`} onClick={closeMenu} >
                            <i className="ri-shopping-cart-fill"></i>
                            Cart
                        </NavLink>

                        <NavLink to="/Login" className={({ isActive }) =>
                            `navA  text-[1.2rem] font-thin hover:cursor-pointer ${isActive ? 'text-[#FFD586] ' : ''}`} onClick={closeMenu} >
                            <button className="bg-zinc-600  hover:cursor-pointer">Login</button>
                        </NavLink>

                    </div>
                    <div className="menu">
                        <button onClick={handler}>
                            <i className=" ri-menu-line text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Nav
