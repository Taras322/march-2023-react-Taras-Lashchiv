import {createBrowserRouter, Outlet, useNavigate, useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import App from "../App";
import LoginForm from "../components/LoginForm/LoginForm";
import {AppRoutes} from "./AppRoutes";



const AppLayout = ()=>(
    <div style={{height:'100vh', overflow:'hidden'}}>
        <Navbar/>
        <div style={{width:'100%', display:'flex'}}>
            <div style={{width:'10%', backgroundColor:'aqua', height:'100vh'}}>Aside</div>
            <Outlet/>
        </div>

    </div>
);

const Users = ()=>{
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate(AppRoutes.LOGIN)
    }, 3000)
    return (
        <div>
            <h1>Users</h1>
            <Outlet/>
        </div>
    );
};

const UsersInfo = ()=>{
    return(
        <div>
            <h1>Users Info</h1>
        </div>
    )
}

const UserID = ()=> {
    const {userId} = useParams();
    console.log(userId);
    return(
        <div>
            <h1>UserID</h1>
        </div>
    )
}
export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h1>Oooops</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <App/>,
            },
            {
                path: AppRoutes.LOGIN,
                element: <LoginForm/>
            },
            {
                path:AppRoutes.USERS,
                element:<Users/>,
                children: [
                    {
                        path:AppRoutes.USERID,
                        element:<UserID/>
                    },
                    {
                        path:AppRoutes.USERS_INFO,
                        element:<UsersInfo/>
                    }
                ]
            },

        ]
    },

]);

