"use client";
import { useEffect, useState } from "react";
import productsService from "/src/data/products_service";
import CardProduct from "/src/components/CardProduct";

const AllProducts = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productsService.getProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError("Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <> 
            {loading ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-6">
                    {products.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default AllProducts;
