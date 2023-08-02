import {createBrowserRouter} from "react-router-dom";
import {Routes} from "./Routes";
import App from "../App";
import Todos from "../components/Todo/Todos";
import Comments from "../components/Comments/Comments";
import Albums from "../components/Albums/Albums";

export const router = createBrowserRouter([
    {
        path:Routes.MAIN,
        element:<App/>
    },
    {

        path:Routes.TODO,
        element:<Todos/>
    },
    {
        path:Routes.ALBUMS,
        element:<Albums/>
    },
    {
        path:Routes.COMMENTS,
        element:<Comments/>
    }


])