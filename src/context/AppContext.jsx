import { createContext, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { NAV_ITEMS } from "../utils/constants";

const AppContext = createContext({
    windowWidth: 0,
    windowHeight: 0,
});

export const AppProvider = ({ children }) => {

    const { windowWidth, windowHeight } = useWindowSize();

    return (
        <AppContext.Provider
            value={{ windowWidth, windowHeight }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;