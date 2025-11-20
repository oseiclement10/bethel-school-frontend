import React, { useEffect, useState } from "react";
import { Form, Input, notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { postHelper } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import type { RequestError } from "@/@types/error";
import AuthLayout from "./AuthenticationLayout";
import { IoMdKey } from "react-icons/io";
import { CheckCircle } from "lucide-react";
import { useSearchParams, Link } from "react-router";

const PortalResetPasswordPage: React.FC = () => {
    const [form] = Form.useForm();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [showError, setShowError] = useState(false);

    const { mutate, isPending, error, isSuccess } = useMutation({
        mutationFn: (data: any) => postHelper("portal/reset-password", data),
        onSuccess: () =>
            notification.success({ message: "Password reset successfully" }),
        onError: () => setShowError(true),
    });

    useEffect(() => {
        if (!token) setShowError(true);
    }, [token]);

    const onFinish = (values: any) => mutate({ ...values, token });

    return (
        <AuthLayout
            title="Reset Your Password"
            hideHeader
        >
            {!token ? (
                <div className="text-red-600 text-sm font-medium">
                    Invalid or expired reset link.
                </div>
            ) : isSuccess ? (
                // SUCCESS CARD
                <div className="bg-green-50 border border-green-300 p-6 rounded-xl text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />

                    <h3 className="text-xl font-semibold text-green-700">
                        Password Reset Successful
                    </h3>

                    <p className="text-green-800 text-sm mt-2 mb-5">
                        Your password has been updated. You can now log in to your portal.
                    </p>

                    <Link
                        to="/portal/login"
                        className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
                    >
                        Go to Login
                    </Link>
                </div>
            ) : (
                // FORM
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFieldsChange={() => setShowError(false)}
                >
                    <Form.Item
                        label="New Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your new password" }]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<IoMdKey />}
                            placeholder="Enter new password"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="password_confirmation"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: "Please confirm your password" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Passwords do not match"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<IoMdKey />}
                            placeholder="Confirm new password"
                        />
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
                            {isPending ? "Resetting..." : "Reset Password"}
                        </button>
                    </Form.Item>
                </Form>
            )}
        </AuthLayout>
    );
};

export default PortalResetPasswordPage;
