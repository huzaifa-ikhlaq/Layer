import { useContext, useState } from 'react'
import { LayerContext } from '../../context/Menu-Context'

export default function BrowniesOption() {
    const { browniesMenu, cakesMenu, cupcakesMenu, cookiesMenu, dessertsMenu, miniDonutsMenu, sundaesMenu } = useContext(LayerContext)

    const allProducts = [
        ...browniesMenu,
        ...cakesMenu,
        ...cupcakesMenu,
        ...cookiesMenu,
        ...dessertsMenu,
        ...miniDonutsMenu,
        ...sundaesMenu,
    ]

    function suffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5)
    }

    const mixedProducts = suffleArray(allProducts)

    const [visibleCount, setVisibleCount] = useState(20)

    const visibleProducts = mixedProducts.slice(0, visibleCount)

    const [cart, setCart] = useState([])

    function handleAddToCart(product, qty) {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                )
            } else {
                return [...prevCart, { ...product, quantity: qty }]
            }
        })
    }

    const [quantities, setQuantities] = useState(1)

    return (
        <>
            <div className='flex'>
                {/* Products */}
                <div className="grid grid-cols-4 w-[73%] px-[15px]">
                    {visibleProducts.map((product) => (
                        <div key={product.id} className="mx-[15px] mb-7.5">
                            {/* Product Card */}
                            <div>
                                {/* Image */}
                                <img
                                    className="object-cover"
                                    src="https://layers.pk/wp-content/uploads/2024/11/All-Chocolate-Dreamcake.jpg"
                                    alt={product.name}
                                />

                                {/* Name */}
                                <h2 className="Foglihten font-bold text-[25px] leading-[33px] cursor-pointer text-black hover:text-[#b09c6d] transition-all duration-200 my-2.5">
                                    {product.name}
                                </h2>

                                {/* Category */}
                                <h4 className="text-[#777777] hover:text-[#333333] cursor-pointer mb-1">
                                    {product.category}
                                </h4>
                                <h4 className="text-[#777777] hover:text-[#333333] cursor-pointer mb-1">
                                    {product.weight}
                                </h4>

                                {/* Description */}
                                <p className="text-[17px] text-[#777777]">{product.description}</p>

                                {/* Billing Area */}
                                <div className="flex flex-col gap-5 justify-between mt-6">
                                    <span className="text-[#b09c6d] text-[17px] font-bold">
                                        {product.currency}{" "}
                                        <span className="font-semibold">{product.price}</span>
                                    </span>
                                    {/* add to cart area  */}
                                    <span className="flex items-center gap-2">
                                        <span className="flex items-center gap-2">
                                            {/* subtract */}
                                            <span onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex bg-[#777777] cursor-pointer h-[2px] w-[8px]"></span>
                                            {/* value */}
                                            <span className="bg-[#bbbbbb26] text-[#777777] size-[42px] rounded-full flex justify-center items-center">
                                                {quantity}
                                            </span>
                                            {/* plus */}
                                            <span onClick={() => setQuantity(quantity + 1)} className="text-[#777777] cursor-pointer">+</span>
                                        </span>
                                        {/* Add to cart  */}
                                        <button onClick={() => handleAddToCart(product, quantity)} className='bg-[#b09c6d] hover:bg-[#a5905f] text-white text-sm font-semibold cursor-pointer transition-all duration-400  h-10.5 w-25'>Add to Cart</button>
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}
                </div >
                {/* Cart Section */}
                <div className="w-[27%] px-[15px] bg-amber-500">
                    <h2 className="font-bold">Your Cart</h2>
                    {cart.length === 0 && <p>No items yet</p>}
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.name} x {item.quantity}</span>
                            <span>{item.currency} {item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>

            </div >
            {
                visibleCount < mixedProducts.length && (
                    <div className='flex justify-center w-[73%]'>
                        <button onClick={() => setVisibleCount((prev) => prev + 20)} className="border border-[#a7a7a7]  text-[14px] cursor-pointer transition-all font-semibold   py-2 px-5 my-5">Learn more</button>
                    </div>
                )
            }


        </>
    );
}