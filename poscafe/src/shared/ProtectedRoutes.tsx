import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    roles?: string[];
    accespath?: string
}

export default function ProtectedRoute({ roles, accespath }: ProtectedRouteProps) {

    let user = null;

    try {
        user = JSON.parse(localStorage.getItem("user") ?? "null");
    } catch {
        localStorage.removeItem("user");
    }
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (roles && !roles.includes(user.role)) {
        return <Navigate to={accespath ?? "/dashboard"} replace />;
    }

    return <Outlet />;
}