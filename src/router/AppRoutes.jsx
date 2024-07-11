import { useRoutes } from "react-router-dom"
import True from "../components/True"
import NotFound from "../components/NotFound"
import Login from "../components/Login"

function AppRoutes() {
    if (localStorage.getItem('login') === "logged in"){
        return useRoutes([
            {path:'/true', element:<True/>},
            {path:'/', element:<True/>},
            {path:'/*', element:<NotFound/>},
      
        ])
    } else {
        return useRoutes([
            {path:'/login', element:<Login/>},
            {path:'/', element:<Login/>},
            {path:'/*', element:<NotFound/>}
        ])
    }
}

export default AppRoutes