import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuOptions = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Jobs", link: "/jobs" },
        { name: "Developers", link: "/developers" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Brand on left */}
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex items-center">
                            <span className="text-black font-bold text-xl">Dev Network</span>
                        </NavLink>
                    </div>

                    {/* Desktop menu links centered */}
                    <div className="hidden md:flex items-center justify-center flex-1">



                        <div className="flex space-x-6">
                            {menuOptions.map((option) => (
                                <NavLink
                                    key={option.name}
                                    to={option.link}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-900 border-b-2 border-black px-3 py-2 text-sm font-medium"
                                            : "text-gray-800 hover:text-gray-900  px-3 py-2 text-sm font-medium"
                                    }
                                >
                                    {option.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Buttons on right */}
                    <div className="hidden md:flex items-center">
                        <button className="ml-4 bg-white border border-black text-black px-4 py-2 rounded hover:bg-gray-100 text-sm font-medium">Sign in</button>
                        <button className="ml-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-medium">Join Network</button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuOptions.map((option) => (
                            <NavLink
                                key={option.name}
                                to={option.link}
                                className="text-gray-800 hover:text-gray-900 hover:underline px-3 py-2 text-sm font-medium"
                            >
                                {option.name}
                            </NavLink>
                        ))}

                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <button className="bg-white border border-black text-black px-4 py-2 rounded hover:bg-gray-100 text-base font-medium w-full">Sign in</button>
                            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-base font-medium w-full mt-2">Join Network</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}