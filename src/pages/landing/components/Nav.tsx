import { HtmlHTMLAttributes } from "react";
import { Link, usePage } from "@inertiajs/react";

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
    const { url } = usePage();
    const isActive = url == path;
    return (
        <Link
            href={path}
            className={`hover:opacity-80 text-white routerLink border-b-2 pb-1  ${
                isActive ? "text-white border-white" : "border-transparent"
            }`}
        >
            {name}
        </Link>
    );
};

export default SchoolNav;
