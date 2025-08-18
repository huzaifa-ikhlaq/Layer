import { createContext } from 'react';
import browniesMenu from '../Menu/Menu-API-Data/Brownies-API';
import cakesMenu from '../Menu/Menu-API-Data/Cakes-API';
import cupcakesMenu from '../Menu/Menu-API-Data/Cupcakes-API';
import cookiesMenu from '../Menu/Menu-API-Data/Cookies-API';
import dessertsMenu from '../Menu/Menu-API-Data/Desserts-API';
import miniDonutsMenu from '../Menu/Menu-API-Data/Mini-Donuts-API';
import sundaesMenu from '../Menu/Menu-API-Data/Sundae-API';

export const LayerContext = createContext();

export default function LayerProvider({ children }) {

    return (
        <LayerContext.Provider value={{ browniesMenu, cakesMenu, cupcakesMenu, cookiesMenu, dessertsMenu, miniDonutsMenu, sundaesMenu }} >
            {children}
        </LayerContext.Provider>
    )
}