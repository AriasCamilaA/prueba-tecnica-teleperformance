"use client"
import { useAppContext } from "App/context";

const ItemCart = ({ item }) => {
    const { addToCart, removeFromCart,removeAllOfProduct } = useAppContext();
  return (
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
            {/* información del producto*/}
            <div className="flex flex-row gap-6 items-center">
                <div className="w-28 h-28">
                    <img className="w-full h-full" src={item.image}/>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-lg text-gray-800 font-semibold">{(item.title).substring(0, 30) + "..."}</p>
                </div>
            </div>
            {/* <!-- Información del precio --> */}
            <div className="self-center text-center">
                <p className="text-gray-800 font-normal text-xl">${item.price}</p>
            </div>
            {/* Eliminar Producto --> */}
            <div className="self-center">
                <button className="" onClick={()=>{removeAllOfProduct(item.id)}}>
                    x
                </button>
            </div>
        </div>
        {/* Cantidad> */}
        <div className="flex flex-row self-center gap-1">
            <button onClick={()=>{removeFromCart(item.id)}} className="w-5 h-5 self-center rounded-full border border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                </svg>
            </button>
            <div className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm">
                {item.quantity}
            </div>
            {/* <input type="number" readonly="readonly" value={item.quantity} className=""/> */}
            <button onClick={()=>{addToCart(item)}} className="w-5 h-5 self-center rounded-full border border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                </svg>
            </button>
        </div>
    </div>
  );
}

export default ItemCart;