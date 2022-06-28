import Admin from "./page/Admin";
import {ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import ProductPage from "./page/ProductPage";
import ShoppingCart from "./page/ShoppingCart";
import Auth from "./page/Auth";
import Shop from "./page/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: ShoppingCart,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: PRODUCT_ROUTE + ':/id',
        Component: ProductPage,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    }
]

export const publicRoutes = [
    {}
]
