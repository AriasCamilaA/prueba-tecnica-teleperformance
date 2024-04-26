"use client";
import { useState } from "react";
import ItemCart from "App/components/ItemCart";
import Link from "next/link";
import { useAppContext } from "App/context";

const cartPage = () => {
    const { totalPrice, cartItems } = useAppContext();

    return (
        <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7">
            <div className="w-full flex flex-col h-fit gap-4 p-4 ">
                <div className="flex">
                    <p className="text-gray-800 text-xl font-extrabold">My Cart</p>
                    <div onClick={()=>{clearCart()}} className="ms-10 transition-colors text-sm bg-red-200 hover:bg-red-400 p-2 rounded-sm text-white text-hover shadow-md">Limpiar</div>
                </div>
                {/* Productos */}
                {cartItems.length > 0
                ? (
                    cartItems.map((item) => (
                        <ItemCart key={item.id} item={item}/>
                    ))
                )
                :( 
                    <p className="text-gray-600">No products in the cart</p>
                )}
            </div>
            <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
                <p className="text-gray-800 text-xl font-extrabold">Purchase Resume</p>
                <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-600">Total</p>
                        <div>
                        <p className="text-end font-bold">${totalPrice}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
                                FINISH  
                        </button>
                        <Link href="/" className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md hover:text-blue-800">
                                ADD MORE PRODUCTS
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default cartPage;
