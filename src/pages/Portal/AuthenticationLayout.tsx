import React, { type PropsWithChildren } from "react";
import { Shield } from "lucide-react";
import logoImg from "@/assets/images/logo.png";
import { config } from "@/config/data";
import { FormConfig } from "@/components/crud/form-config";
import loginImg from "@/assets/images/bfs-students.jpg";
import { Link } from "react-router";

interface AuthLayoutProps extends PropsWithChildren {
    title?: string;
    hideHeader?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, hideHeader, title }) => {
    return (
        <div className="min-h-screen relative flex items-center justify-center px-6 py-12 font-poppins">
            <img src={loginImg} alt="students login" className="absolute object-cover inset-0 w-full h-full" />
            <div className="absolute inset-0 bg-blue-700/10"></div>

            <div className="w-full max-w-md relative">
                {/* Header */}
                <div className="text-center mb-10">
                    <Link to={"/portal/login"}   className="w-14 mx-auto mb-4">
                        <img
                            src={logoImg}
                            alt="bethel fashion school"
                              className="w-14 mx-auto mb-4"
                        />
                    </Link>
                    {
                        !hideHeader && (
                            <div className="">
                                <h1 className="text-3xl font-bold text-blue-800">Bethel Fashion School</h1>
                                <p className="text-gray-600">Student Portal</p>
                            </div>
                        )
                    }


                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-6">
                    {title && (
                        <h2 className="text-xl border-b pb-2 text-center font-semibold text-blue-900 mb-3">
                            {title}
                        </h2>
                    )}


                    <FormConfig>{children}</FormConfig>
                </div>

                {/* Security Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm text-blue-800 font-medium">Secure Access</p>
                            <p className="text-sm text-blue-700 mt-1">
                                Your credentials are encrypted. Contact the school admin if you need help accessing your portal.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-gray-800 text-sm">
                    <p className="mb-2">
                        Having issues?{" "}
                        <a
                            href={`https://wa.me/${config.SUPPORT_PHONE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline"
                        >
                            Contact the school administrator
                        </a>
                    </p>
                    <p className="text-xs text-gray-900">
                        © {new Date().getFullYear()} Bethel Fashion School. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
