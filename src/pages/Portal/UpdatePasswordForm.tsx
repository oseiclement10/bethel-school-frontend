import React, { useState } from "react";
import { Form, Input, notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { postHelper } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import type { RequestError } from "@/@types/error";
import { IoMdKey } from "react-icons/io";
import { FormHeader } from "@/components/crud/form-config";

interface UpdatePasswordFormProps {
    className?: string;
    closeModal: () => void;
}

const UpdatePasswordForm: React.FC<UpdatePasswordFormProps> = ({ className, closeModal }) => {
    const [form] = Form.useForm();
    const [showError, setShowError] = useState(false);



    const { mutate, isPending, error } = useMutation({
        mutationFn: (data: any) => postHelper("portal/update-password", data),
        onSuccess: () => {
            notification.success({ message: "Updated password successfully" });
            form.resetFields();
            closeModal();
        },
        onError: () => {
            setShowError(true);
        }
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

    return (
        <section className={className}>
            {/* Header */}
            <header>
                <FormHeader>
                    Update Password
                </FormHeader>
                <p className="mt-1 mb-4 text-sm text-gray-600">
                    Ensure your account uses a long, random password to stay secure.
                </p>
            </header>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFieldsChange={() => setShowError(false)}
            >
                 <Form.Item
                    label="Current Password"
                    name="current_password"
                    rules={[{ required: true, message: "Please enter your new password" }]}
                >
                    <Input.Password
                        size="large"
                        prefix={<IoMdKey />}
                        placeholder="Enter new password"
                    />
                </Form.Item>

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
        </section>
    );
};

export default UpdatePasswordForm;
