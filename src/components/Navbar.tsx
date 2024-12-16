import React, { useState } from 'react';
import { Link } from 'react-scroll';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap`">Flowbite</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={toggleNavbar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto transition-all duration-500 ease-in-out overflow-hidden md:opacity-100 md:h-auto ${isOpen ? 'opacity-100 h-screen' : 'h-0'}`}
                    id="navbar-default"
                >
                    <ul className="font-medium text-3xl md:text-base flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white">
                        <li>
                            <Link
                                onClick={toggleNavbar}
                                to="hero-section"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-violet-600 md:p-0 cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleNavbar}
                                to="about-section"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0 cursor-pointer"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleNavbar}
                                to="tech-stack-section"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0 cursor-pointer"
                            >
                                Tech Stack
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={toggleNavbar}
                                to="projects-section"
                                smooth={true}
                                duration={500}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0 cursor-pointer"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-600 md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
