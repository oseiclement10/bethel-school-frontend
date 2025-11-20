import React, { useEffect, useState } from "react";
import { Form, Input, Button, notification, type UploadFile } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postWithFile } from "@/services/apiService";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import type { RequestError } from "@/@types/error";
import { FormHeader } from "@/components/crud/form-config";
import UploadImage from "@/components/crud/image-upload";
import { queryKeys } from "@/lib/query-keys";

interface UpdatePassportProps {
    data: any;
    closeModal: () => void;
    className?: string;
}

const UpdatePassport: React.FC<UpdatePassportProps> = ({
    data: applicant,
    closeModal,
    className = "",
}) => {

    const queryClient = useQueryClient();

    const [form] = Form.useForm();
    const [showError, setShowError] = useState(false);
    const [passportImg, setPassportImg] = useState<UploadFile[]>([]);

    const { mutate, isPending, error } = useMutation({
        mutationFn: async (formValues: object) => postWithFile("portal/update-passport", formValues),
        onSuccess: () => {
            notification.success({
                message: "Passport Picture Updated successfully",
            });
            queryClient.invalidateQueries({ queryKey: [queryKeys.admissionDetails] });
            form.resetFields();
            closeModal();
        },
        onError: () => setShowError(true),
    });

    const onFinish = (values: { passport: File | undefined }) => {

        values.passport = passportImg[0].originFileObj;
        mutate(values);
    };

    useEffect(() => {
        if (applicant?.passport) {
            setPassportImg([{
                uid: "1",
                name: applicant?.passport,
                status: "done",
                url: applicant?.passport
            }]);
        }
    }, []);

    return (
        <section className={className}>
            <FormHeader>
                Update Passport
            </FormHeader>

            <Form
                form={form}
                layout="vertical"
                className="mt-6"
                onFinish={onFinish}
                onFieldsChange={() => setShowError(false)}

            >
                {/* Passport Upload */}
                <Form.Item label="Passport" name="image" className="md:col-span-2">
                    <div className="mb-5">
                        <UploadImage
                            value={passportImg}
                            updateValue={(val) => setPassportImg(val)}
                        />
                    </div>
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Enter Password"
                    name="password"
                    rules={[
                        { required: true, message: "Please enter your password" },
                    ]}
                >
                    <Input.Password size="large" />
                </Form.Item>

                {showError && (
                    <FormErrorAlert message={parseApiError(error as RequestError)} />
                )}

                <div className="flex justify-end space-x-3 mt-4">
                    <Button onClick={closeModal}>Cancel</Button>

                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isPending}
                        loading={isPending}
                    >
                        Save Changes
                    </Button>
                </div>
            </Form>
        </section>
    );
};

export default UpdatePassport;
