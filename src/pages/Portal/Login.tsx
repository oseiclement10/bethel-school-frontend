import React, { useState } from "react";
import { Form, Input, Checkbox, Space, Select } from "antd";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { IoMdKeypad, IoMdKey } from "react-icons/io";
import { postHelper } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import { saveUserToStorage } from "@/services/storageService";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import type { RequestError } from "@/@types/error";
import { countries } from "@/lib/countries";
import AuthLayout from "./AuthenticationLayout";


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
        <AuthLayout>
            <Form
                form={form}
                name="portal-login"
                initialValues={{ remember: true, phone_code: "233" }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                onFieldsChange={() => setShowError(false)}
            >
                <Form.Item
                    label="Phone Number"
                    required
                    className="w-full!"
                >
                    <Space.Compact className="w-full!" >
                        <Form.Item
                            name="phone_code"
                            noStyle
                            rules={[{ required: true, message: "Please select code" }]}
                        >
                            <Select
                                placeholder="Code"
                                style={{ width: "35%" }}
                                size="large"
                                options={countries.map(country => ({
                                    value: country.callingCode,
                                    label: `${country.flag} ${country.callingCode}`,
                                    countryName: country.name.toLowerCase(),
                                    callingCode: country.callingCode.replace(/\D/g, ""),
                                }))}
                                optionFilterProp="countryName"
                                showSearch

                            />

                        </Form.Item>

                        <Form.Item
                            name="phone_number"
                            noStyle
                            rules={[{ required: true, message: "Please enter phone number" }]}
                        >
                            <Input prefix={<IoMdKeypad />} placeholder="Enter registered phone number" style={{ width: "65%" }} size="large" />
                        </Form.Item>
                    </Space.Compact>
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
                    <Link to={"/portal/forget-password"} className="text-blue-700 font-medium hover:underline text-sm">
                        Forgot password?
                    </Link>
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
        </AuthLayout>

    );
};




export default PortalLoginPage