import { createContext, useState } from 'react';
import products from '../Menu/Menu-API-Data/ProductsApi';


export const LayerContext = createContext();

export default function LayerProvider({ children }) {

    const [cart, setCart] = useState([])

    const [allProducts, setAllProducts] = useState(products.map(product => ({ ...product, quantity: 1 })));

    const handleQuantity = (product, quantity) => {
        const updateedProducts = allProducts.map(item => item.id === product.id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item)
        setAllProducts(updateedProducts);
    }

    const handleAddToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                return [...prevCart, { ...product, quantity: quantity }]
            }
        })
    }

    const CartSection = () => {
        return (
            <div className="w-[27%] h-140 px-[15px]  p-5 rounded-lg overflow-y-scroll">
                <h1 className='text-xl font-black mb-3'>Cart</h1>
                {cart.length === 0 && (
                    <div>
                        <span>
                            <svg className='h-24 w-full mt-3 mb-5' xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16"><g fill="#77777719" strokeWidth="0" stroke="#77777719"><path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5L6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" /><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" /></g></svg>
                        </span>
                        <p className="text-xl text-center font-medium">No products in cart.</p>
                        <p className='text-[#777777]   font-medium'>You must have an order with the  minimum of  <span className='text-[#b09c6d] font-bold'>Rs 1,000</span> to place your order, your current order total is <span className='text-[#b09c6d] font-bold'>Rs 0</span> .</p>
                    </div>
                )}

                {cart.map(item => (
                    <div key={item.id} className="mb-4">
                        <div className='flex items-center'>
                            {/* Image */}
                            <img className="object-cover w-[75px] h-[75px] mr-[15px] " src={item.image} alt={item.name} />
                            <div className='flex flex-col'>
                                <span className="text-[#242424] text-[18px] font-semibold">
                                    {item.name}
                                </span>
                                <span className='text-[#242424] text-[18px] font-semibold'>Location: Faisalabad-Civial-Line</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 mt-6">
                            <span className="text-[#b09c6d] text-[15px] font-semibold">
                                <span className='text-[#777777] font-medium'>{item.quantity} x</span> <span className='text-[16px] font-bold'>{item.currency}</span> {item.price * item.quantity}
                            </span>
                        </div>
                    </div>
                ))}

                {/* total */}
                {cart.length > 0 && (
                    <div className="flex justify-between mt-3 text-[17px] font-semibold border-y border-[#77777743] py-4">
                        <span>Subtotal:</span>
                        <span className="text-[#b09c6d] text-[17px] font-bold">
                            {cart[0].currency}{" "}
                            {cart.reduce(
                                (total, item) => total + item.price * item.quantity,
                                0
                            )}
                        </span>
                    </div>
                )}
            </div>
        )
    }


    return (
        <LayerContext.Provider value={{ allProducts, cart, CartSection, handleAddToCart, handleQuantity }} >
            {children}
        </LayerContext.Provider>
    )
}