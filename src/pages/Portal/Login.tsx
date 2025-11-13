import React, { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { IoMdKeypad, IoMdKey } from "react-icons/io";
import { Shield } from "lucide-react";
import { postHelper } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import logoImg from "@/assets/images/logo.png";
import { saveUserToStorage } from "@/services/storageService";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import type { RequestError } from "@/@types/error";
import { config } from "@/config/data";
import { FormConfig } from "@/components/crud/form-config";

interface FormFields {
    phone: string;
    password: string;
    remember: boolean;
}

const PortalLoginPage: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { addUser } = useContext(AuthContext);
    const [showError, setShowError] = useState(false);

    const { mutate, isPending, error } = useMutation({
        mutationFn: (data: FormFields) => postHelper("portal/login", data),
        onSuccess: (userData) => {
            saveUserToStorage(userData);
            addUser(userData);
            navigate("/portal/dashboard");
        },
        onError: () => setShowError(true),
    });

    const onFinish = (values: FormFields) => {
        mutate(values);
    };

    const onFinishFailed = () => null;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 font-poppins">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-10">
                    <img
                        src={logoImg}
                        alt="bethel fashion school"
                        className="w-14 mx-auto mb-4"
                    />
                    <h1 className="text-3xl font-bold text-blue-800">
                        Bethel Fashion School
                    </h1>
                    <p className="text-gray-600">Student Portal</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mb-6">
                    <FormConfig>
                        <Form
                            form={form}
                            name="portal-login"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            layout="vertical"
                            onFieldsChange={() => setShowError(false)}
                        >
                            <Form.Item<FormFields>
                                label="Phone Number"
                                name="phone"
                                rules={[{ required: true, message: "Please enter your phone number" }]}
                            >
                                <Input
                                    size="large"
                                    prefix={<IoMdKeypad className="text-gray-500" />}
                                    placeholder="Enter registered phone number"
                                />
                            </Form.Item>

                            <Form.Item<FormFields>
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please enter your password" }]}
                            >
                                <Input.Password
                                    size="large"
                                    prefix={<IoMdKey className="text-gray-500" />}
                                    placeholder="Enter your password"
                                />
                            </Form.Item>

                            <div className="flex justify-between items-center mb-6">
                                <Form.Item<FormFields> name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="#" className="text-blue-700 font-medium hover:underline text-sm">
                                    Forgot password?
                                </a>
                            </div>

                            {showError && (
                                <FormErrorAlert message={parseApiError(error as RequestError)} />
                            )}

                            <Form.Item>
                                <button
                                    className={`w-full bg-blue-800 text-white p-3 rounded-lg font-medium ${isPending ? "cursor-not-allowed opacity-70" : "hover:opacity-80"
                                        }`}
                                    disabled={isPending}
                                >
                                    {isPending ? "Logging in..." : "Log in"}
                                </button>
                            </Form.Item>
                        </Form>
                    </FormConfig>

                </div>

                {/* Security Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start">
                        <Shield className="h-5 w-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm text-blue-800 font-medium">Secure Access</p>
                            <p className="text-sm text-blue-700 mt-1">
                                Your credentials are encrypted. Contact the school admin if you
                                need help accessing your portal.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-gray-500 text-sm">
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
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Bethel Fashion School. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};




export default PortalLoginPage