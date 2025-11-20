import React, { useState } from "react";
import { Form, Input, Space, Select } from "antd";
import { useMutation } from "@tanstack/react-query";
import { IoMdKeypad } from "react-icons/io";
import { postHelper } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import type { RequestError } from "@/@types/error";
import { countries } from "@/lib/countries";
import AuthLayout from "./AuthenticationLayout";
import { Link } from "react-router";

const PortalForgotPasswordPage: React.FC = () => {
    const [form] = Form.useForm();
    const [showError, setShowError] = useState(false);

    const { mutate, isPending, error, isSuccess } = useMutation({
        mutationFn: (data: any) => postHelper("portal/forgot-password", data),
        onError: () => setShowError(true),
    });

    const onFinish = (values: any) => mutate(values);

    return (
        <AuthLayout title="Request Password Reset" hideHeader>
            {!isSuccess ? (
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ phone_code: "233" }}
                    onFinish={onFinish}
                    onFieldsChange={() => setShowError(false)}
                >
                    <Form.Item label="Phone Number" required className="w-full!">
                        <Space.Compact className="w-full!">
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
                                <Input
                                    prefix={<IoMdKeypad />}
                                    placeholder="Enter registered phone number"
                                    style={{ width: "65%" }}
                                    size="large"
                                />
                            </Form.Item>
                        </Space.Compact>
                    </Form.Item>

                    {showError && (
                        <FormErrorAlert message={parseApiError(error as RequestError)} />
                    )}

                    <Form.Item>
                        <button
                            className={`w-full bg-blue-800 text-white p-3 rounded-lg font-medium ${isPending ? "cursor-not-allowed opacity-70" : "hover:opacity-80"
                                }`}
                            disabled={isPending}
                        >
                            {isPending ? "Processing..." : "Send Reset Link"}
                        </button>
                    </Form.Item>
                </Form>
            ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <h3 className="text-green-700 font-semibold text-lg mb-2">Request Sent</h3>
                    <p className="text-green-700 text-sm mb-4">
                        If this phone number is registered, a password reset link has been sent.
                    </p>
                    <Link
                        to="/portal/login"
                        className="text-blue-700 underline font-medium text-sm"
                    >
                        Return to Login
                    </Link>
                </div>
            )}
        </AuthLayout>
    );
};

export default PortalForgotPasswordPage;
