import { useState } from 'react';
import { FaSearch, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/icons/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State for the main navigation menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // NEW: State for the mobile search bar
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Toggle main menu, but also close search if it's open
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isSearchOpen) setIsSearchOpen(false); // Close search
    };

    // NEW: Toggle search bar, but also close menu if it's open
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isMenuOpen) setIsMenuOpen(false); // Close menu
    };

    return (
        // Added min-h-[76px] to prevent layout shift when search opens
        <header className=" container mx-auto px-4 sm:px-8 py-5 min-h-[76px] sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm w-100%">
            {/* This div contains the standard navbar elements */}
            {/* NEW: It's now hidden when isSearchOpen is true */}
            <div className={`${isSearchOpen ? 'hidden' : 'flex'} justify-between items-center`}>
                
                {/* Mobile Menu Toggle (Hamburger/Close Icon) */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-[#003459]">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
                    <Link to="/"><img src={Logo} alt="Monito Logo" className="h-8 sm:h-10" /></Link>
                </div>

                {/* --- DESKTOP NAVIGATION (Hidden on mobile) --- */}
                <nav className="hidden lg:flex items-center space-x-8 text-lg">
                    <Link to='/' className="text-[#003459] font-bold">Home</Link>
                    <Link to='/Category' className="text-[#003459] font-bold">Category</Link>
                    <Link to='/About' className="text-[#003459] font-bold">About</Link>
                    <Link to='/Contact' className="text-[#003459] font-bold">Contact</Link>
                </nav>
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                        <input type="text" placeholder="Search something here!" className="bg-white rounded-full py-2.5 pl-10 pr-4 w-72 focus:outline-none border-2 border-gray-200" />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <button className="bg-[#003459] text-white px-7 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                        Join the community
                    </button>
                    <div className="flex items-center space-x-2 text-[#003459] font-bold cursor-pointer">
                        <img src={Logo} alt="Vietnam Flag" className="h-6 rounded-full" />
                        <span>VND</span>
                        <FaChevronDown className="w-3 h-3" />
                    </div>
                </div>

                {/* Search Icon (Mobile) */}
                <div className="lg:hidden">
                    {/* NEW: Added onClick handler */}
                    <button onClick={toggleSearch} className="text-2xl text-[#003459]">
                        <FaSearch />
                    </button>
                </div>
            </div>

            {/* --- NEW: MOBILE SEARCH OVERLAY --- */}
            {/* This replaces the entire header content when isSearchOpen is true */}
            {isSearchOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-white z-20 flex items-center px-4 animate-fade-in-down">
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="bg-gray-100 rounded-full py-3 pl-12 pr-4 w-full focus:outline-none text-lg" 
                            autoFocus // Automatically focus the input
                        />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <button onClick={toggleSearch} className="text-2xl text-gray-500 ml-3">
                        <FaTimes />
                    </button>
                </div>
            )}
            
            {/* --- MOBILE DROPDOWN MENU --- */}
            <div className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden transition-transform duration-300 ease-in-out z-10 ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
                <div className="flex flex-col items-center space-y-6 p-8">
                    <Link to='/' className="text-[#003459] font-bold text-lg" onClick={toggleMenu}>Home</Link>
                    <Link to='/Category' className="text-[#003459] font-bold text-lg" onClick={toggleMenu}>Category</Link>
                    <Link to='/About' className="text-[#003459] font-bold text-lg" onClick={toggleMenu}>About</Link>
                    <Link to='/Contact' className="text-[#003459] font-bold text-lg" onClick={toggleMenu}>Contact</Link>
                    <button className="w-full bg-[#003459] text-white px-7 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                        Join the community
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;