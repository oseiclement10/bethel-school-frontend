import { type HtmlHTMLAttributes } from "react";
import { Link, useLocation } from "react-router";

export const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Courses",
        path: "/courses",
    },
    {
        name: "About Us",
        path: "/about-us",
    },
    {
        name: "Contact Us",
        path: "/contact-us",
    },
];

const SchoolNav = ({ ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <nav {...props}>
            {links.map((elem) => (
                <NavLinkWrapper
                    key={elem.path}
                    name={elem.name}

                    path={elem.path}
                />
            ))}
        </nav>
    );
};

export type NavLinkWrapperProps = {
    name: string;
    path: string;
};

export const NavLinkWrapper = ({ name, path }: NavLinkWrapperProps) => {

    const { pathname } = useLocation();

    const isActive = pathname == path;
    return (
        <Link
            to={path}
            className={`hover:opacity-80 text-white routerLink border-b-2 pb-1  ${isActive ? "text-white border-white" : "border-transparent"
                }`}
        >
            {name}
        </Link>
    );
};

export default SchoolNav;
