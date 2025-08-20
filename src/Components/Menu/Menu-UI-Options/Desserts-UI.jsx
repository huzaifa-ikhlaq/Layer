import { useContext } from "react"
import { LayerContext } from "../../context/Menu-Context"

export default function DessertsOption() {

    const { allProducts, cart, CartSection, handleAddToCart, handleQuantity } = useContext(LayerContext)

    const dessertsMenu = allProducts.filter((product) => product.category === "Desserts")

    return (
        <div className='min-[800px]:flex'>

            {/* Products */}
            <div className="grid min-[768px]:grid-cols-2 min-[918px]:grid-cols-3 min-[1300px]:grid-cols-4 min-[800px]:w-[73%] px-[6px] min-[992px]:px-[15px]">
                {dessertsMenu.map((product) => (
                    <div key={product.id} className="mx-[11px] mb-7.5">
                        {/* Product Card */}
                        <div className='flex flex-col h-full'>
                            {/* Image */}
                            <img
                                className="object-cover w-full"
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
                            <h4 className="text-[#777777] hover:text-[#333333] cursor-pointer mb-1">
                                {product.weight}
                            </h4>

                            {/* Description */}
                            <p className="text-[17px] text-[#777777]">{product.description}</p>
                            {/* Billing Area */}
                            <div className="flex flex-col gap-5 justify-between mt-auto pt-4">
                                <span className="text-[#b09c6d] text-[17px] font-bold">
                                    {product.currency}{" "}
                                    <span className="font-semibold">{product.price}</span>
                                </span>
                                {/* <span onClick={  }></span> */}
                                {/* add to cart area  */}
                                <div className="flex items-center gap-2 w-full justify-between">
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >

            <CartSection />

        </div >
    );
}