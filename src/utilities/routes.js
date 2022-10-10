import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Root from "../components/Root";
import Shop from "../components/Shop";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('products.json'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])

export default router;