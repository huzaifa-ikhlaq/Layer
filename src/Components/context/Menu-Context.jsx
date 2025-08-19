import { createContext, useState } from 'react';
import products from '../Menu/Menu-API-Data/ProductsApi';


export const LayerContext = createContext();

export default function LayerProvider({ children }) {

    const [cart, setCart] = useState([])

    const [allProducts, setAllProducts] = useState(products.map(product => ({ ...product, quantity: 1 })));

    const handleQuantity = (product, quantity) => {
        const updateedProducts = setAllProducts(allProducts.map(item => item.id === product.id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item))
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

    function handleRemoveFromCart(id) {
        setCart(prevCart => {
            return prevCart.filter(item => item.id !== id)
        });
    }

    const handleQuantityInCart = (product, quantity) => {
        const updateedProducts = setCart(prevCart => prevCart.map(item => item.id === product.id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item))
    };

    const CartSection = () => {
        return (
            <div className="w-[27%] h-140 px-[15px]   rounded-lg overflow-y-scroll">
                {cart.length === 0 && (
                    <div className='flex flex-col justify-center h-full relative '>
                        <h1 className='absolute top-0 text-xl font-black mb-3'>Cart</h1>
                        <span>
                            <svg className='h-24 w-full mt-3 mb-5' xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16"><g fill="#77777719" strokeWidth="0" stroke="#77777719"><path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5L6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" /><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607l1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4a2 2 0 0 0 0-4h7a2 2 0 1 0 0 4a2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" /></g></svg>
                        </span>
                        <p className="text-xl text-center font-medium">No products in cart.</p>
                        <p className='text-[#777777]   font-medium text-center'>You must have an order with the  minimum of  <span className='text-[#b09c6d] font-bold'>Rs 1,000</span> to place your order, your current order total is <span className='text-[#b09c6d] font-bold'>Rs 0</span> .</p>
                    </div>
                )}

                {cart.map(item => (
                    <div key={item.id} className="mb-4">
                        <h1 className='text-xl font-black mb-3'>Cart</h1>
                        <div className='flex items-center w-full'>
                            {/* Image */}
                            <img className="object-cover size-19 mr-[15px] " src={item.image} alt={item.name} />
                            <div className='flex flex-col w-full'>
                                <span className=" flex itemscenter justify-between gap-3 w-full">
                                    <span className='text-[#242424] text-[18px] font-semibold w-50'> {item.name}</span>
                                    <span onClick={() => handleRemoveFromCart(item.id)} className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path fill="#242424" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" strokeWidth="0" stroke="#242424" /></svg>
                                    </span>
                                </span>
                                <span className='text-[#242424] text-[18px] font-semibold w-50'>Location: Faisalabad-Civial-Line</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-3 mt-6">
                            <span className="flex items-center gap-2">
                                {/* subtract */}
                                <span onClick={() => handleQuantityInCart(item, -1)}
                                    className="flex bg-[#777777] hover:bg-[#242424] cursor-pointer h-[2px] w-[8px]"></span>
                                {/* value */}
                                <span className="bg-[#bbbbbb26] text-[#777777] size-[42px] rounded-full flex justify-center items-center">
                                    {item.quantity}
                                </span>
                                {/* plus */}
                                <span onClick={() => handleQuantityInCart(item, 1)}
                                    className="text-[#777777] hover:text-[#242424] cursor-pointer">+</span>
                            </span>
                            <span onClick={() => handleRemoveFromCart(item.id)} className="text-[#b09c6d] text-[15px] font-semibold">
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