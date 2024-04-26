"use client"

import AllProducts from "App/components/AllProducts";
import productsService from "App/data/products_service";

const { useEffect, useState } = require("react");

const pageProduct = ({ params }) => {
    const [id, setId] = useState(params.product);
    const [product, setProduct] = useState({});

    useEffect(() => {
        productsService.getProductById(id).then((data) => {
            setProduct(data);
        });
    }, [id]);

    return (
        <main class="mb-2">
            <div class="container mx-auto px-6"></div>
                <div class="md:flex md:items-center mt-0 bg-gray-800 pb-4 text-white">
                    <div class="w-full h-64 md:w-1/2 lg:h-96">
                        <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product.image} alt={product.title}/>
                    </div>
                    <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 ">
                        <div class="text-gray-200 mt-3 text-sm">{product.category}</div>
                        <h3 class="text-blue-300 uppercase text-lg">{product.title}</h3>
                        <span class="text-gray-200 mt-3">${product.price}</span>
                        <hr class="my-3"/>
                        <div class="mt-2">
                            <p>{product.description}</p>
                        </div>
                        <div class="flex items-center mt-6">
                            <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                <svg class="h-5 w-5" color="teal" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mt-16">
                    <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>
                    <AllProducts />
                </div>
        </main>
    );
}

export default pageProduct;