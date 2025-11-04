import { IoArrowForward } from "react-icons/io5";
import logoImg from "../../../../assets/images/logo.png";
import Nav, {
    links,
    NavLinkWrapper,
    NavLinkWrapperProps,
} from "../components/Nav";
import { Link, usePage } from "@inertiajs/react";
import { FaGraduationCap } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { Drawer } from "antd";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Header = () => {
    const { url } = usePage();
    const isApplyActive = url != "/";
    const withinApplications =
        url.includes("apply") || url.includes("admission");

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="relative z-10 items-center justify-between hidden w-5/6 py-6 mx-auto lg:flex ">
                <div className="items-center hidden space-x-2 lg:flex">
                    <span
                        className={` ${
                            true ? "flex px-2 py-[2px] bg-white rounded-lg" : ""
                        } `}
                    >
                        <img
                            src={logoImg}
                            alt="crown image"
                            className={true ? "w-11" : "w-12"}
                        />
                    </span>

                    <h2 className="text-lg font-semibold text-white ">
                        School of Fashion & Design
                    </h2>
                </div>
                <Nav className="relative mx-auto w-[35%] space-x-6 font-semibold " />
                <div className="relative flex">
                    <Link
                        href={
                            withinApplications ? "#" : route("homepage.apply")
                        }
                        className={`px-4 py-[3px] flex items-center  border-2 border-transparent text-white bg-blue-600 rounded-lg  hover:bg-white hover:rounded-md hover:text-blue-700 hover:border-blue-700 active:opacity-20 ${
                            isApplyActive &&
                            "bg-white rounded-md !text-blue-700 "
                        }`}
                    >
                        {withinApplications ? (
                            <span className="flex items-center">
                                Applications{" "}
                                <FaGraduationCap className="ml-1" />
                            </span>
                        ) : (
                            <span className="flex items-center">
                                Apply <IoArrowForward className="ml-1" />
                            </span>
                        )}
                    </Link>
                </div>
            </header>
            <header
                className={`${isApplyActive ? "fixed " : "relative" } top-0 z-30 block w-full px-6 py-4 ${
                    isApplyActive ? "bg-blue-600" : "bg-transparent"
                } lg:hidden`}
            >
                <div className="flex items-center justify-between">
                    <span
                        className={` ${
                            true ? "flex px-2 py-[2px] bg-white rounded-lg" : ""
                        } `}
                    >
                        <img
                            src={logoImg}
                            alt="crown image"
                            className={true ? "w-11" : "w-12"}
                        />
                    </span>
                    {isApplyActive && (
                        <h3 className="text-white">
                            {" "}
                            School of Fashion & Design
                        </h3>
                    )}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-2xl text-white active:opacity-20"
                    >
                        <CiMenuFries className="" />
                    </button>
                </div>
            </header>
            <Drawer
                placement="top"
                open={isOpen}
                closable={false}
                onClose={() => setIsOpen(false)}
            >
                <MobileMenu closeMenu={() => setIsOpen(false)} />
            </Drawer>
        </>
    );
};

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    const mobileLinks: NavLinkWrapperProps[] = Object.assign([], links);
    mobileLinks.splice(2, 0, {
        name: "Apply",
        path: "/apply",
    });

    return (
        <div className="pl-4 ">
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                <img src={logoImg} alt="crown image" className="w-12" />
                <button onClick={() => closeMenu()}>
                    <LiaTimesSolid className="text-2xl text-blue-800" />
                </button>
            </div>
            <div className="flex flex-col py-5 space-y-4 text-base">
                {mobileLinks.map((elem) => (
                    <MobileLink name={elem.name} path={elem.path} />
                ))}
            </div>
        </div>
    );
};

const MobileLink = ({ path, name }: NavLinkWrapperProps) => {
    const { url } = usePage();
    const isActive = url == path;
    return (
        <Link
            href={path}
            className={`hover:opacity-80 text-slate-800 routerLink font-semibold pb-1  ${
                isActive ? "!text-blue-800 " : "border-transparent"
            }`}
        >
            {name}
        </Link>
    );
};

export default Header;
