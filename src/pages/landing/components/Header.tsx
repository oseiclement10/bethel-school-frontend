import { IoArrowForward } from "react-icons/io5";
import logoImg from "@/assets/images/logo.png";
import Nav, { links, type NavLinkWrapperProps } from "../components/Nav";
import { Link, useLocation } from "react-router";
import { FaGraduationCap } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { Drawer } from "antd";
import { LiaTimesSolid } from "react-icons/lia";
import { useState, useMemo, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { getHelper } from "@/services/apiService";

const Header = () => {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isApplyActive = pathname !== "/";
    const withinApplications = useMemo(
        () => pathname.includes("apply") || pathname.includes("admission"),
        [pathname]
    );

    const handleMenuToggle = () => setIsOpen((prev) => !prev);
    const handleMenuClose = () => setIsOpen(false);

    const queryClient = useQueryClient();

    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: [queryKeys.admissionFee],
            queryFn: () => getHelper("public/admission/fee")
        });
    }, []);



    return (
        <>
            <header className="relative z-10 items-center justify-between hidden w-5/6 py-3 mx-auto lg:flex">
                <Logo />
                <Nav className="relative mx-auto w-[35%] space-x-6" />
                <ApplyButton
                    withinApplications={withinApplications}
                    isApplyActive={isApplyActive}
                />
            </header>

            {/* Mobile Header */}
            <header
                className={`${isApplyActive ? "fixed bg-blue-600" : "relative bg-transparent"
                    } top-0 z-30 block w-full px-6 py-4 lg:hidden`}
            >
                <div className="flex items-center justify-between">
                    <Logo />
                    {isApplyActive && (
                        <h3 className="text-sm font-medium text-white sm:text-base">
                            School of Fashion & Design
                        </h3>
                    )}
                    <button
                        onClick={handleMenuToggle}
                        className="text-2xl text-white transition-opacity active:opacity-20"
                        aria-label="Open menu"
                    >
                        <CiMenuFries />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <Drawer
                placement="top"
                open={isOpen}
                closable={false}
                onClose={handleMenuClose}
                destroyOnClose
            >
                <MobileMenu closeMenu={handleMenuClose} />
            </Drawer>
        </>
    );
};

// Extracted Logo component for reusability
const Logo = () => (
    <div className="flex items-center space-x-2">
        <span className="flex px-2 py-0.5 bg-white rounded-lg">
            <img src={logoImg} alt="Bethel School logo" className="w-11" />
        </span>
        <h2 className="hidden text-lg font-semibold text-white lg:block">
            Bethel School
        </h2>
    </div>
);





const ApplyButton = ({
    withinApplications,
    isApplyActive,
}: {
    withinApplications: boolean;
    isApplyActive: boolean;
}) => (
    <Link
        to={withinApplications ? "#" : "/apply"}
        aria-label={withinApplications ? "Applications section" : "Apply now"}
        className={`group relative inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full  text-base tracking-wide transition-all duration-300 
            ${isApplyActive
                ? "bg-white text-blue-700 border border-blue-600 shadow-inner"
                : "bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)]"
            } 
            hover:-translate-y-0.5 active:scale-95`}
    >
        <span className="relative flex items-center gap-2">
            {withinApplications ? (
                <>
                    <span>Applications</span>
                    <FaGraduationCap className="text-lg group-hover:rotate-6 transition-transform duration-300" />
                </>
            ) : (
                <>
                    <span>Apply Now</span>
                    <IoArrowForward className="text-lg transition-transform duration-300 group-hover:translate-x-1.5" />
                </>
            )}
        </span>

        {/* Glow effect */}
        {!isApplyActive && (
            <span className="absolute inset-0 rounded-full bg-linear-to-r from-blue-400/30 to-indigo-400/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></span>
        )}
    </Link>
);







// Mobile Menu component
const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    // Insert "Apply" link at index 2
    const mobileLinks: NavLinkWrapperProps[] = useMemo(() => {
        const linksCopy = [...links];
        linksCopy.splice(2, 0, {
            name: "Apply",
            path: "/apply",
        });
        return linksCopy;
    }, []);

    return (
        <div className="pl-4">
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                <img src={logoImg} alt="Bethel School logo" className="w-12" />
                <button
                    onClick={closeMenu}
                    className="transition-opacity hover:opacity-70"
                    aria-label="Close menu"
                >
                    <LiaTimesSolid className="text-2xl text-blue-800" />
                </button>
            </div>
            <nav className="flex flex-col py-5 space-y-4 text-base">
                {mobileLinks.map((link) => (
                    <MobileLink key={link.path} {...link} />
                ))}
            </nav>
        </div>
    );
};

// Mobile Link component
const MobileLink = ({ path, name }: NavLinkWrapperProps) => {
    const { pathname } = useLocation();
    const isActive = pathname === path;

    return (
        <Link
            to={path}
            className={`transition-opacity hover:opacity-80 font-semibold pb-1 ${isActive ? "text-blue-800 border-b-2 border-blue-800" : "text-slate-800"
                }`}
        >
            {name}
        </Link>
    );
};

export default Header;