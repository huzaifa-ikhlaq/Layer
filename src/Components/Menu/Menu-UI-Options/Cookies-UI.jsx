import { useContext } from "react"
import { LayerContext } from "../../context/Menu-Context"

export default function CookiesOption() {

    const { cookiesMenu } = useContext(LayerContext)

    return (
        <div className='flex'>
            {/* Products */}
            <div className="grid grid-cols-4 w-[73%] px-[15px]">
                {cookiesMenu.map((cookie) => (
                    <div key={cookie.id} className='mx-[15px] mb-7.5'>
                        {/* product */}
                        <div>
                            {/* Image */}
                            <img
                                className=" object-cover"
                                src="https://layers.pk/wp-content/uploads/2024/11/All-Chocolate-Dreamcake.jpg"
                                alt={cookie.name}
                            />
                            <h2 className="Foglihten font-bold text-[25px] leading-[33px] cursor-pointer text-black hover:text-[#b09c6d] transition-all duration-200 my-2.5">
                                {cookie.name}
                            </h2>
                            <h4 className="text-[#777777] hover:text-[#333333] cursor-pointer mb-1">
                                {cookie.category}
                            </h4>
                            <p className="text-[17px] text-[#777777]">{cookie.description}</p>

                            {/* Billing Area */}
                            <div className="flex flex-col gap-5 justify-between mt-6">
                                <span className="text-[#b09c6d] text-[17px] font-bold">
                                    {cookie.currency}{" "}
                                    <span className="font-semibold">{cookie.price}</span>
                                </span>
                                {/* add to cart area  */}
                                <span className="flex items-center gap-2">
                                    <span className="flex items-center gap-2">
                                        {/* subtract */}
                                        <span className="flex bg-[#777777] cursor-pointer h-[2px] w-[8px]"></span>
                                        {/* value */}
                                        <span className="bg-[#bbbbbb26] text-[#777777] size-[42px] rounded-full flex justify-center items-center">
                                            1
                                        </span>
                                        {/* plus */}
                                        <span className="text-[#777777] cursor-pointer">+</span>
                                    </span>
                                    {/* Add to cart  */}
                                    <button className='bg-[#b09c6d] hover:bg-[#a5905f] text-white text-sm font-semibold cursor-pointer transition-all duration-400  h-10.5 w-25'>Add to Cart</button>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* cart */}
            <div className="w-[27%] px-[15px] bg-amber-800"></div>
        </div>
    )
}