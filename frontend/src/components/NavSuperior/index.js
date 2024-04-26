"use client";

import { useAppContext } from "App/context";
import Link from "next/link";

const NavSuperior = () => {
    const {totalItems} = useAppContext();
    return(
        <nav className="bg-gray-800 text-white p-4 w-full fixed top-0 z-10">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <a href="/" className="text-xl font-bold">
            Arias Shop
          </a>
          <ul className="flex space-x-4 flex-wrap gap-3">
            <li>
              <Link href="/" className="hover:text-blue-300">All Products</Link>
            </li>
            <li>
                <Link href="/cart" className="hover:bg-gray-600 flex bg-gray-800 px-3 py-1 rounded-full">
                    <svg className="h-5 w-5" color="teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <span class="relative inline-block">
                        <span class="bg-yellow-500 text-white rounded-full px-2 py-1 text-xs font-bold absolute top-0 right-0">{totalItems}</span>
                            <svg class="h-6 w-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"/>
                            </svg>
                        </span>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}


export default NavSuperior;