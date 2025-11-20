import { NavLink, Navigate, Outlet } from "react-router";
import { useAuthContext } from "@/contexts/AuthContext";
import { Grid,  User, BadgeCent } from "lucide-react";
import { Logo } from "@/pages/landing/components/Header";
import { Avatar, Dropdown, type MenuProps } from "antd";

import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";


export const PortalProtectedLayout = () => {
    const user = useAuthContext();

    if (!user.user?.token) {
        return <Navigate to="/portal/login" replace />;
    }

    const tabs = [
        {
            name: "Dashboard",
            path: "/portal/dashboard",
            icon: <Grid className="w-4 h-4" />
        },
        {
            name: "Fees",
            path: "/portal/fees",
            icon: <BadgeCent className="w-4 h-4" />
        },
        {
            name: "Profile",
            path: "/portal/profile",
            icon: <User className="w-4 h-4" />
        },
    ];

    return (
        <div className="min-h-screen font-poppins bg-linear-to-br from-gray-50 to-gray-100 flex flex-col">
            {/* Header with Navigation */}
            <header className="bg-white shadow-sm border-b border-gray-200/60 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        <div className="flex items-center">
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-1">
                            {tabs.map((tab) => (
                                <NavLink
                                    key={tab.path}
                                    to={tab.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 font-medium px-4 py-2 rounded-xl transition-all duration-200 ease-in-out relative group
                                        ${isActive
                                            ? "text-blue-700 bg-blue-50/80 font-semibold"
                                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50/80"
                                        }`
                                    }
                                >
                                    {tab.icon}
                                    <span>{tab.name}</span>


                                </NavLink>
                            ))}
                        </nav>

                        {/* User Info */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex flex-col items-end">
                                <span className="text-sm font-medium text-gray-900">
                                    Welcome back
                                </span>
                                <span className="text-xs text-gray-500">
                                    {user.user?.user?.email || 'User'}
                                </span>
                            </div>
                           <HeaderUserDropdown />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden pb-3">
                        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
                            {tabs.map((tab) => (
                                <NavLink
                                    key={tab.path}
                                    to={tab.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-200 shrink-0
                                        ${isActive
                                            ? "text-blue-700 bg-blue-50 border border-blue-200 shadow-sm"
                                            : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 border border-transparent"
                                        }`
                                    }
                                >
                                    {tab.icon}
                                    <span className="text-sm">{tab.name}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/60 min-h-[calc(100vh-12rem)]">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200/60 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                        <span>© {new Date().getFullYear()} Bethel School of Fashion and Design. All rights reserved.</span>
                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <button className="hover:text-gray-700 transition-colors">Privacy</button>
                            <button className="hover:text-gray-700 transition-colors">Terms</button>
                            <button className="hover:text-gray-700 transition-colors">Help</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


const HeaderUserDropdown = () => {
    const { removeUser, user } = useContext(AuthContext);

    const handleLogout = () => {
        removeUser();
      
    };

    const items: MenuProps["items"] = [
        {
            key: "logout",
            label: <span className="text-red-600 font-medium">Log out</span>,
        },
    ];

    return (
        <Dropdown
            menu={{
                items,
                onClick: ({ key }) => {
                    if (key === "logout") handleLogout();
                },
            }}
            placement="bottomRight"
            trigger={["click"]}
        >
            <div className="cursor-pointer">
                <Avatar
                    size={40}
                    src={user?.user?.passport ?? undefined}
                    style={{ backgroundColor: "#1677ff" }}
                >
                    {user?.user?.first_name?.charAt(0) ?? "-"}
                </Avatar>
            </div>
        </Dropdown>
    );
};





export const PortalPublicLayout = () => {
    return (
        <main className="font-poppins">
            <Outlet />
        </main>
    );
};

