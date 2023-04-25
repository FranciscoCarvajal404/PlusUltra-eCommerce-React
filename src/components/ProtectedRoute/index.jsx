import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({children, user}) =>{
    if(!user){
        return <Navigate to={'/login'}/>
    }
    
    return(
        <Outlet/>
    )
}

export default ProtectedRoute