import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Register from "../pages/register.jsx";
import registerAction from "./actions/registerAction.js";
import Login from "../pages/Login.jsx";
import loginAction from "./actions/loginAction.js";
import registerLoader from "./loders/registerLoaders.js";
import loginLoader from "./loders/loginLoaders.js";
import ResetLink from "../pages/ResetLink.jsx";
import resetLinkAction from "./actions/resetLinkAction.js";
import ResetPassword from "../pages/ResetPassword.jsx";
import resetPasswordAction from "./actions/resetPasswordAction.js";
import resetLinkLoader from "./loders/resetLinkLoader.js";
import resetPasswordLoader from "./loders/resetPasswordLoader.js";
import appLoader from "./loders/appLoader.js";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: appLoader,
    },
    {
        path: '/register',
        element: <Register />,
        loader: registerLoader,
        action: registerAction,
    },
    {
        path: '/login',
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
    },
    {
        path: '/reset-link',
        element: <ResetLink />,
        action: resetLinkAction,        
        loader: resetLinkLoader,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
        action: resetPasswordAction,
        loader: resetPasswordLoader,
    },
])

export default router;