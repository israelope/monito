import React from 'react'
import Logo from '../assets/icons/Logo.png'
import Search from '../assets/icons/Search.png'
import Button from './Button'

const Navbar = () => {
    return (
        <main className='bg-[#F7DBA7] px-25 py-10 flex items-center justify-between' >

            <img src={Logo} alt="" />

            <ul className='flex text-2xl gap-10 text-[#003459] font-semibold'>
                <li>Home</li>
                <li>Category</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            

                <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-sm px-4 py-2">
                    <img
                        src={Search}
                        alt="Search Icon"
                        className="w-5 h-5"
                    />
                    <input
                        type="text"
                        placeholder="Search something here!"
                        className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 pl-3"
                    />
                </div>
                <div>
                    <Button className='bg-[#003459] text-white'>
                        Join the community
                    </Button>
                </div>
        </main>
    )
}

export default Navbar