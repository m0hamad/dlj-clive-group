import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home/Home';
import Biography from '../pages/Biography/Biography';
import Overview from '../pages/Overview/Overview';
import NaturalProductSynthesis from '../pages/NaturalProductSynthesis/NaturalProductSynthesis';
import ReactionMethodolgy from '../pages/ReactionMethodolgy/ReactionMethodolgy';
import Members from '../pages/Members/Members';
import Publications from '../pages/Publications/Publications';

/**
 * Router Context that handles the usable and unknown paths
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'biography',
                element: <Biography />
            },
            {
                path: 'overview',
                element: <Overview />,
            },
            {
                path: 'natural-product-synthesis',
                element: <NaturalProductSynthesis />
            },
            {
                path: 'reaction-methodology',
                element: <ReactionMethodolgy />
            },
            {
                path: 'Members',
                element: <Members />
            },
            {
                path: 'publications',
                element: <Publications />
            },
        ]
    },
]);