"use client"

import AllProducts from "App/components/AllProducts";
import { useAppContext } from "App/context";
import productsService from "App/data/products_service";

const { useEffect, useState } = require("react");

const PageProduct = ({ params }) => {

    const { addToCart } = useAppContext();


    const [id, setId] = useState(params.product);
    const [product, setProduct] = useState({});

    useEffect(() => {
        productsService.getProductById(id).then((data) => {
            setProduct(data);
        });
    }, [id]);

    return (
        // Aqui se muestra la información del producto seleccionado
        <main className="mb-2">
            <div className="container mx-auto px-6"></div>
                <div className="md:flex md:items-center mt-0 bg-gray-800 p-4 text-white">
                    <div className="w-full h-64 md:w-1/2 lg:h-96">
                        <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.image} alt={product.title}/>
                    </div>
                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 ">
                        <div className="text-gray-200 mt-3 text-sm">{product.category}</div>
                        <h3 className="text-blue-300 uppercase text-lg">{product.title}</h3>
                        <span className="text-gray-200 mt-3">${product.price}</span>
                        <hr className="my-3"/>
                        <div className="mt-2">
                            <p>{product.description}</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <button onClick={()=>{addToCart(product)}} className="text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                <svg className="h-5 w-5" color="teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-10">
                    <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
                    <AllProducts />
                </div>
        </main>
    );
}

export default PageProduct;