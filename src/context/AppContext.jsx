import { createContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { NAV_ITEMS } from "../utils/constants";
import { useLocation } from "react-router-dom";

const AppContext = createContext({
    windowWidth: 0,
    windowHeight: 0,
});

export const AppProvider = ({ children }) => {

    const { windowWidth, windowHeight } = useWindowSize();
    const location = useLocation();

    const [npsImages, setNpsImages] = useState([]);
    const [rmImages, setRmImages] = useState([]);
    const [membersImages, setMembersImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const npsImageContext = import.meta.glob('../assets/images/naturalproductsynthesis/*.png');
            const npsImportedImages = await Promise.all(Object.values(npsImageContext).map((importImage) => importImage()));
            setNpsImages(npsImportedImages)

            const rmImageContext = import.meta.glob('../assets/images/reactionmethodology/*.png');
            const rmImportedImages = await Promise.all(Object.values(rmImageContext).map((importImage) => importImage()));
            setRmImages(rmImportedImages)

            const membersImageContext = import.meta.glob('../assets/images/members/*.jpg');
            const membersImportedImages = await Promise.all(Object.values(membersImageContext).map((importImage) => importImage()));
            setMembersImages(membersImportedImages)
        };
        importImages();
    }, []);

    return (
        <AppContext.Provider
            value={{ windowWidth, windowHeight, location, npsImages, rmImages, membersImages }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;