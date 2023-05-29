import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navart = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-custom-gray p-2 px-3 sm:px-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/img/KODH.svg" alt="Logo" width={80} height={80} />
                <span className="font-semibold text-xl tracking-tight ml-2 cursor-pointer hover:shadow-lg">
                    MarketFast
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <g fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M0 3h20M0 9h20M0 15h20" />
                        </g>
                    </svg>
                </button>
            </div>
            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <Link href={'/'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer hover:shadow-lg">
                        Home
                    </Link>
                    <Link href={'/About'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer hover:shadow-lg">
                        About
                    </Link>
                    <Link href={'/New'} className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:shadow-lg">
                        New Product
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navart;


// import React from 'react'
// import Image from 'next/image'
// import { useRouter } from "next/router";

// const Navart = () => {
//     const router = useRouter()
//     return (
//         <div className="h-18 px-10 bg-custom-gray flex items-center justify-center sticky top-0 ">
//             <div className="flex-3">
//                 <ul className="flex items-center list-none text-white">
//                     <li className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer">Homepage</li>
//                     <li className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer">Products</li>
//                     <li className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer">Menu</li>
//                     <Image src='/img/KODH.png' alt='img KODH' width={90} height={90} />
//                     <li className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer">Events</li>
//                     <li className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer">Blog</li>
//                     <li
//                         className="font-light text-sm mx-4 hover:text-red-600 cursor-pointer"
//                         onClick={() => router.push('/New')}
//                     >New</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navart
