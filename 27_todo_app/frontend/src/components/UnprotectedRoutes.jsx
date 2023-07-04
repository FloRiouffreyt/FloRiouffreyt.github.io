import { Navigate } from "react-router-dom";

const UnprotectedRoutes = ({LoggedIn, children}) => {
    if (LoggedIn) {
        return <Navigate to='/' replace />
    }
    return children
}

export default UnprotectedRoutes