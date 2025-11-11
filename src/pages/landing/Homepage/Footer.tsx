import LogoImg from "@/components/LogoImg";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    const processing = false;

    const socialLinks = [
        {
            icon: FaFacebookF,
            href: "#",
            label: "Facebook"
        },
        {
            icon: FaTwitter,
            href: "#",
            label: "Twitter"
        },
        {
            icon: FaInstagram,
            href: "#",
            label: "Instagram"
        },
        {
            icon: FaWhatsapp,
            href: "#",
            label: "WhatsApp"
        }
    ];

    const companyLinks = [
        { name: "About Us", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Applications", href: "#" },
        { name: "Programs", href: "#" }
    ];

    const quickLinks = [
        { name: "Admissions", href: "#" },
        { name: "Scholarships", href: "#" },
        { name: "Campus Tour", href: "#" },
        { name: "Student Portal", href: "#" }
    ];

    return (
        <footer className="bg-linear-to-br from-blue-900 via-blue-950 to-indigo-950">
            {/* Main Footer Content */}
            <section className="py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-[90%] sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-4">
                            <div className="flex items-start space-x-3 mb-6">
                                <div className="flex-shrink-0">
                                    <LogoImg />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        Bethel School of 
                                        <span className="block bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                                            Fashion & Design
                                        </span>
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2"></div>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed text-blue-100 mb-8 max-w-md">
                                Bethel Fashion School is your premier destination for comprehensive fashion education. 
                                Join us to build an exceptional career in the fashion industry.
                            </p>

                            {/* Social Links */}
                            <div className="mb-8">
                                <p className="text-blue-200 font-medium mb-4">Follow Us</p>
                                <div className="flex items-center space-x-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            title={social.label}
                                            className="group flex items-center justify-center w-10 h-10 text-white transition-all duration-300 rounded-xl bg-blue-800/50 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
                                        >
                                            <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a
                                    href="tel:+233557612426"
                                    className="group flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-200"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                        <MdPhone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">+233 55 761 2426</span>
                                </a>
                                <a
                                    href="mailto:info@bethelfashion.edu"
                                    className="group flex items-center space-x-3 text-blue-100 hover:text-white transition-colors duration-200"
                                >
                                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                        <MdEmail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">info@bethelfashion.edu</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50">
                                Quick Links
                            </p>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="lg:col-span-2">
                            <p className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50">
                                Company
                            </p>
                            <ul className="space-y-4">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center text-blue-100 hover:text-white transition-all duration-200 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location & Newsletter */}
                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                                {/* Location */}
                                <div>
                                    <p className="flex items-center text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50">
                                        <IoLocationOutline className="mr-2 w-5 h-5 text-blue-300" />
                                        Locate Us
                                    </p>
                                    <div className="space-y-3">
                                        <p className="text-blue-100 leading-relaxed">
                                            Atonsu Agogo, Lake Road<br />
                                            Asokwa Municipal, Kumasi
                                        </p>
                                        <a
                                            href="https://maps.app.goo.gl/h64pDQ22ZZCUsj269"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200 group"
                                        >
                                            View on Google Maps
                                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div>
                                    <p className="text-lg font-semibold text-white mb-6 pb-2 border-b border-blue-700/50">
                                        Stay Updated
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                onChange={(e) => null}
                                                placeholder="Enter your email"
                                                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 rounded-xl ${
                                                processing
                                                    ? "bg-blue-400 cursor-not-allowed"
                                                    : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-blue-500/25"
                                            }`}
                                        >
                                            {processing ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                    Subscribing...
                                                </>
                                            ) : (
                                                "Subscribe to Newsletter"
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800/50">
                <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-sm text-blue-200 text-center md:text-left">
                            © {new Date().getFullYear()} Bethel School of Fashion & Design. All rights reserved.
                        </p>
                        <div className="flex items-center mt-4 space-x-6 md:mt-0">
                            <p className="text-sm text-blue-300">
                                Crafted with ❤️ by{" "}
                                <a 
                                    href="#" 
                                    className="font-semibold text-blue-100 hover:text-white transition-colors"
                                >
                                    OAC TechHub
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;