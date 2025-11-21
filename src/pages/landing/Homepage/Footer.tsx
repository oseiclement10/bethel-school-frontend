import LogoImg from "@/components/LogoImg";
import { FaWhatsapp,  FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
    const socialLinks = [
        { icon: FaYoutube, href: "https://www.youtube.com/@BethelDecor-f7t", label: "Youtube" },
        { icon: FaTwitter, href: "https://x.com/BethelOf49821", label: "Twitter" },
        { icon: FaInstagram, href: "https://instagram.com/bethel_fashion_and_decor", label: "Instagram" },
        { icon: FaWhatsapp, href: "https://wa.me/233557612426", label: "WhatsApp" }
    ];

    const companyLinks = [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Applications", href: "/apply" },
        { name: "Programs", href: "/courses" }
    ];

    const quickLinks = [
        { name: "Admissions", href: "/apply" },
        { name: "Courses", href: "/courses" },
        { name: "Student Portal", href: "/portal/login" }
    ];
    // Removed Campus Tour + Scholarships (NOT in router)

    return (
        <footer className="bg-blue-950">
            <section className="py-16 lg:py-20">
                <div className="px-4 mx-auto lg:max-w-[90%]  sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">

                        {/* Brand */}
                        <div className="lg:col-span-4">
                            <div className="flex items-start space-x-3 mb-6">
                                <LogoImg />
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        Bethel School of
                                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-blue-100">
                                            Fashion & Design
                                        </span>
                                    </h3>
                                    <div className="w-12 h-1 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
                                </div>
                            </div>

                            <p className="text-lg text-blue-100 leading-relaxed mb-8">
                                Bethel Fashion School trains students to excel in the global fashion industry.
                            </p>

                            {/* Social */}
                            <div className="mb-8">
                                <p className="text-blue-200 font-medium mb-4">Follow Us</p>
                                <div className="flex space-x-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.label}
                                            className="group flex items-center justify-center w-10 h-10 bg-blue-800/50 rounded-xl text-white hover:bg-blue-600 hover:scale-110 transition-all"
                                        >
                                            <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="space-y-3">
                                <a href="tel:+233557612426" className="group flex items-center space-x-3 text-blue-100 hover:text-white transition">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500">
                                        <MdPhone className="w-4 h-4" />
                                    </div>
                                    <span>+233 55 761 2426</span>
                                </a>

                                <a href="mailto:info@bethelfashion.online" className="group flex items-center space-x-3 text-blue-100 hover:text-white transition">
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500">
                                        <MdEmail className="w-4 h-4" />
                                    </div>
                                    <span>info@bethelfashion.online</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50"> Quick Links </p>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (<li key={index}> <NavLink to={link.href} className="group flex items-center text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-1" > <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span> {link.name} </NavLink> </li>))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50"> Company </p>
                            <ul className="space-y-4">
                                {companyLinks.map((link, index) => (<li key={index}> <NavLink to={link.href} className="group flex items-center text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-1" > <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span> {link.name} </NavLink> </li>))}
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="lg:col-span-4">
                            <p className="flex items-center text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50"> <IoLocationOutline className="mr-2 w-5 h-5 text-blue-300" /> Locate Us </p>

                            <p className="text-blue-100 leading-relaxed mb-4">
                                Atonsu Agogo, Lake Road<br />
                                Asokwa Municipal, Kumasi
                            </p>

                            <a
                                href="https://maps.app.goo.gl/h64pDQ22ZZCUsj269"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition"
                            >
                                View on Google Maps →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom */}
            <div className="border-t border-blue-800/50">
                <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-blue-200 text-center">
                            © {new Date().getFullYear()} Bethel School of Fashion & Design. All rights reserved.
                        </p>

                        <p className="mt-4 md:mt-0 text-sm text-blue-300">
                            Developed by{" "}
                            <a
                                href="https://wa.me/233200039147"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-100 hover:text-white font-semibold"
                            >
                                OAC TechHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;