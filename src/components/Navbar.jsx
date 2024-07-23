import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";
import { navItems } from '../constants/index';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 rounded-full" src={logo} alt="Logo" />
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className="px-3 py-2 border rounded-md">Sign In</a>
                        <a href="#" className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-900 rounded-md">Create Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleMenu}>
                            {showMenu ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* To make it responsive: */}
                {showMenu && (
                    <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-end mt-5">
                            <a href="#" className="px-3 py-2 mr-6 border rounded-md">Sign In</a>
                            <a href="#" className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-900 rounded-md">Create Account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;