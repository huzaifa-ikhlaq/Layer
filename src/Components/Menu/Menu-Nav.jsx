import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import AllOption from "./Menu-UI-Options/All-UI";
import BrowniesOption from "./Menu-UI-Options/Brownies-UI";
import CakesOption from "./Menu-UI-Options/Cakes-UI";
import CookiesOption from "./Menu-UI-Options/Cookies-UI";
import CupcakesOption from "./Menu-UI-Options/Cupcakes-UI";
import DessertsOption from "./Menu-UI-Options/Desserts-UI";
import MiniDonutsOption from "./Menu-UI-Options/Mini-Donuts-UI";
import SundaeOption from "./Menu-UI-Options/Sundae-UI";
import mainImgMenu from './Imgs-Menu/Main-img-Menu.jpg';

export default function Menu() {

    function Layout() {

        const MenuLink = document.querySelectorAll('#Menu-Link')

        return (
            <>
                <div className="relative flex flex-col justify-center items-center h-[356px] ">
                    {/* main img  */}
                    <img className='absolute -z-10 h-[356px] w-full object-cover' src={mainImgMenu} alt="Main Menu" />
                    {/* heading  */}
                    <h1 className='Foglihten text-[54px] font-bold text-white text-center min-[500px]:mb-10'>Menu</h1>
                    {/* options */}
                    <div className='flex flex-wrap items-center justify-center gap-4 min-[500px]:gap-10'>
                        {/* option 1 */}
                        <NavLink to='/all' className='group flex items-center cursor-pointer'>
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <svg className='size-[35px] mr-2.5' xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none"><path d="M3 23.8H16C17.215 23.8 18.2 24.785 18.2 26V39C18.2 40.215 17.215 41.2 16 41.2H3C1.78497 41.2 0.8 40.215 0.8 39V26C0.8 24.785 1.78497 23.8 3 23.8Z" stroke="white" strokeWidth="1.6" /><path d="M26 23.8H39C40.215 23.8 41.2 24.785 41.2 26V39C41.2 40.215 40.215 41.2 39 41.2H26C24.785 41.2 23.8 40.215 23.8 39V26C23.8 24.785 24.785 23.8 26 23.8Z" stroke="white" strokeWidth="1.6" /><path d="M3 0.8H16C17.215 0.8 18.2 1.78497 18.2 3V16C18.2 17.215 17.215 18.2 16 18.2H3C1.78497 18.2 0.8 17.215 0.8 16V3C0.8 1.78497 1.78497 0.8 3 0.8Z" stroke="white" strokeWidth="1.6" /><path d="M26 0.8H39C40.215 0.8 41.2 1.78497 41.2 3V16C41.2 17.215 40.215 18.2 39 18.2H26C24.785 18.2 23.8 17.215 23.8 16V3C23.8 1.78497 24.785 0.8 26 0.8Z" stroke="white" strokeWidth="1.6" /></svg>
                                    </div>
                                    <div className='text-white flex flex-col mt-[5px]'>
                                        <div className='relative  w-fit'>
                                            <h4 className='text-sm font-semibold'>All</h4>
                                            <span className='bg-[#b09c6d] absolute h-[0.5px] w-0 group-hover:w-full transition-all duration-200'></span>
                                            <span className={`w-0 bg-[#b09c6d] absolute h-[0.5px]  ${isActive ? "w-full" : ""}`}></span>
                                        </div>
                                        <p className='text-sm text-[#ffffff99]'>Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 2 */}
                        <NavLink to="brownies" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-double-chocolate-cake-64.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Brownies</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">7 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 3 */}
                        <NavLink to="/cakes" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-cake-64.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Cakes</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">26 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 4 */}
                        <NavLink to="/cookies" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-cookie-64.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Cookies</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">8 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 5 */}
                        <NavLink to="/cupcakes" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-cupcake-60.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">CupCakes</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">21 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 6 */}
                        <NavLink to="/desserts" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-cookie-64.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Desserts</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">11 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 7 */}
                        <NavLink to="/mini-donuts" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2024/08/Donut-300x300.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Mini Donuts</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">22 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                        {/* option 8 */}
                        <NavLink to="/sundae" className="group flex items-center cursor-pointer">
                            {({ isActive }) => (
                                <>
                                    <div>
                                        <img
                                            className="size-[35px] mr-2.5"
                                            src="https://layers.pk/wp-content/uploads/2021/11/icons8-ice-cream-in-waffle-64.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white flex flex-col mt-[5px]">
                                        <div className="relative w-fit">
                                            <h4 className="text-sm font-semibold">Sundae</h4>
                                            <span className="bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-200"></span>
                                            <span
                                                className={`bg-[#b09c6d] absolute bottom-0 left-0 h-[1px] ${isActive ? "w-full" : "w-0"
                                                    }`}
                                            ></span>
                                        </div>
                                        <p className="text-sm text-[#ffffff99]">9 Products</p>
                                    </div>
                                </>
                            )}
                        </NavLink>

                    </div >
                </div >
                {/* OutLet  */}
                < div className='mt-8 min-[900px]:mt-15 min-[900px]:px-[19px]' >
                    <Outlet />
                </div >
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<AllOption />} />
                    <Route path="/all" element={<AllOption />} />
                    <Route path="brownies" element={<BrowniesOption />} />
                    <Route path="cakes" element={<CakesOption />} />
                    <Route path="cookies" element={<CookiesOption />} />
                    <Route path="cupcakes" element={<CupcakesOption />} />
                    <Route path="desserts" element={<DessertsOption />} />
                    <Route path="mini-donuts" element={<MiniDonutsOption />} />
                    <Route path="sundae" element={<SundaeOption />} />
                </Route>
            </Routes>

        </>
    );
}
