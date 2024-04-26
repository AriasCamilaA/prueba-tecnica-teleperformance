"use client"
import { useEffect, useState } from "react";
import productsService from "/src/data/products_service";
import CardProduct from "/src/components/CardProduct";


const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      productsService.getProducts().then((data) => {
        setProducts(data);
      });
    }, []);
  

  return (
    <> 
        {products.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-6">
            {products.map((product) => (
                <CardProduct key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <p>Cargando productos...</p>
            )}
    </>
  );
};

export default AllProducts;