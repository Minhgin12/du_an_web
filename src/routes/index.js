import OrderPage from "../OrderPage/OrderPage";
import ProductsPAge from "../ProductsPage/ProductsPAge";
import HomePage from "../pages/HomePage/HomePage";

export const routes=[
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/order',
        page: OrderPage
    },
    {
        path: '/Products',
        page: ProductsPAge
    }
]