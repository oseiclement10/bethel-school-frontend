import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "@/contexts/AuthContext";

export const PortalProtectedLayout = () => {
    const user = useAuthContext();

    if (!user.user?.token) {
        return <Navigate to="/portal/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            
            <aside className="w-64 bg-white border-r">
                
            </aside>

            <main className="flex-1 p-6">
                <Outlet /> 
            </main>
        </div>
    );
};



export const PortalPublicLayout = () => {
    return (
        <main className="font-poppins">
            <Outlet />
        </main>
    );
};

