import { useContext } from "react"
import { LayerContext } from "../../context/Menu-Context"

export default function MiniDonutsOption() {

    const { allProducts, cart, CartSection, handleAddToCart, handleQuantity } = useContext(LayerContext)

    const miniDonutsMenu = allProducts.filter((product) => product.category === "Mini Donuts")

    return (
        <div className='flex'>

            {/* Products */}
            <div className="grid grid-cols-4 w-[73%] px-[15px]">
                {miniDonutsMenu.map((product) => (
                    <div key={product.id} className="mx-[15px] mb-7.5">
                        {/* Product Card */}
                        <div>
                            {/* Image */}
                            <img
                                className="object-cover"
                                src={product.image}
                                alt={product.name}
                            />

                            {/* Name */}
                            <h2 className="Foglihten font-bold text-[22px] leading-[33px] cursor-pointer text-black hover:text-[#b09c6d] transition-all duration-200 my-2.5">
                                {product.name}
                            </h2>

                            {/* Category */}
                            <h4 className="text-[#777777] hover:text-[#333333] cursor-pointer mb-1">
                                {product.category}
                            </h4>

                            {/* Description */}
                            <p className="text-[17px] text-[#777777]">{product.description}</p>
                            {/* Billing Area */}
                            <div className="flex flex-col gap-5 justify-between mt-6">
                                <span className="text-[#b09c6d] text-[17px] font-bold">
                                    {product.currency}{" "}
                                    <span className="font-semibold">{product.price}</span>
                                </span>
                                {/* <span onClick={  }></span> */}
                                {/* add to cart area  */}
                                <span className="flex items-center gap-2">
                                    <span className="flex items-center gap-2">
                                        {/* subtract */}
                                        <span onClick={() => handleQuantity(product, -1)}
                                            className="flex bg-[#777777] cursor-pointer h-[2px] w-[8px]"></span>
                                        {/* value */}
                                        <span className="bg-[#bbbbbb26] text-[#777777] size-[42px] rounded-full flex justify-center items-center">
                                            {product.quantity}
                                        </span>
                                        {/* plus */}
                                        <span onClick={() => handleQuantity(product, 1)}

                                            className="text-[#777777] cursor-pointer">+</span>
                                    </span>
                                    {/* Add to cart  */}
                                    <button onClick={() => handleAddToCart(product, product.quantity)}
                                        className='bg-[#b09c6d] hover:bg-[#a5905f] text-white text-sm font-semibold cursor-pointer transition-all duration-400  h-10.5 w-25'>Add to Cart</button>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div >

            <CartSection />
        </div>
    )
}