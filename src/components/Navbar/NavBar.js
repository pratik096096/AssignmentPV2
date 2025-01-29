import React from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    

    return (
        <nav className={`bg-white fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">BusiScale</h1></HashLink>
                    
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                           
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
