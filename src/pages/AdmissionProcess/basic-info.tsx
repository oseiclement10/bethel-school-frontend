import { useState, useEffect, type ReactNode } from "react";
import { Form, Input, Select, DatePicker, Button, Space, type UploadFile, notification } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import FormErrorAlert from "@/components/crud/form-error-alert";
import { parseApiError } from "@/utils/parse-api-errors";
import type { RequestError } from "@/@types/error";
import { FormConfig } from "@/components/crud/form-config";
import { countries } from "@/lib/countries";
import UploadImage from "@/components/crud/image-upload";
import FileInput from "@/components/crud/file-input";
import { educationalLevels, relationshipOptions } from "@/lib/data";
import dayjs from "dayjs";
import { useAdmissionData } from "./context";
import { useSubmitAdmissions } from "@/hooks/use-submit-admission";
import type { AdmissionApplicationResp } from "@/@types/entities";
import { CheckCircle2, Trash2 } from "lucide-react";

const { Option } = Select;
const { TextArea } = Input;


type AdmissionApplicationFormProps = {
    onSucess: (resp: AdmissionApplicationResp) => void;
    onBack: () => void
}

const AdmissionApplicationForm = ({ onSucess, onBack }: AdmissionApplicationFormProps) => {

    const {
        admissionData,
        resetAdmission
    } = useAdmissionData();

    const [form] = Form.useForm();
    const [showError, setShowError] = useState(false);
    const [passportImg, setPassportImg] = useState<UploadFile[]>([]);
    const [idImage, setIdImage] = useState<UploadFile[]>([]);
    const [educationalDoc, setEducationalDoc] = useState<File | null>(null);





    const isEditMode = !!admissionData;


    const educationalLevel = Form.useWatch("educational_level", form);






    const { submit, saving, error } = useSubmitAdmissions({
        onSuccessFn: (resp) => {
            form.resetFields();
            onSucess(resp);
        }
    });

    const onFinish = (values: any) => {
        if (!validateEmergencyContactInfo(values.emergency_contact_type, values)) {
            notification.error({ message: "Emergency contact information is required!", placement: "top" });
            return;
        }

        values.passport = passportImg[0]?.originFileObj ?? undefined;
        values.educational_doc = educationalDoc ?? undefined;
        values.identification_image = idImage[0]?.originFileObj ?? undefined;
        values.date_of_birth = dayjs(values.date_of_birth).format('YYYY-MM-DD');


        submit(values, admissionData?.admission?.id);


    };

    const validateEmergencyContactInfo = (
        type: "guardian" | "mother" | "father",
        values: Record<string, any>
    ): boolean => {

        if (type === "guardian") {
            return !!(values.guardian_name?.trim() && values.guardian_phone_code && values.guardian_phone_number?.trim());
        }

        if (type === "mother") {
            return !!(values.mother_name?.trim() && values.mother_phone_code && values.mother_phone_number?.trim());
        }

        if (type === "father") {
            return !!(values.father_name?.trim() && values.father_phone_code && values.father_phone_number?.trim());
        }

        return false;
    };


    useEffect(() => {
        if (isEditMode && admissionData) {
            form.setFieldsValue({
                first_name: admissionData?.admission?.applicant?.first_name,
                last_name: admissionData?.admission?.applicant?.last_name,
                other_names: admissionData?.admission?.applicant?.other_names,
                gender: admissionData?.admission?.applicant?.gender,
                date_of_birth: admissionData?.admission?.applicant?.date_of_birth ? dayjs(admissionData?.admission?.applicant.date_of_birth) : null,
                email: admissionData?.admission?.applicant?.email,
                phone_code: admissionData?.admission?.applicant?.phone_code,
                phone_number: admissionData?.admission?.applicant?.phone_number,
                address: admissionData?.admission?.applicant?.address,
                nationality: admissionData?.admission?.applicant?.nationality,
                religion: admissionData?.admission?.applicant?.religion,
                hometown: admissionData?.admission?.applicant?.hometown,
                father_name: admissionData?.admission?.applicant?.father_name,
                father_occupation: admissionData?.admission?.applicant?.father_occupation,
                father_phone_code: admissionData?.admission?.applicant?.father_phone_code,
                father_phone_number: admissionData?.admission?.applicant?.father_phone_number,
                mother_name: admissionData?.admission?.applicant?.mother_name,
                mother_occupation: admissionData?.admission?.applicant?.mother_occupation,
                mother_phone_code: admissionData?.admission?.applicant?.mother_phone_code,
                mother_phone_number: admissionData?.admission?.applicant?.mother_phone_number,
                guardian_name: admissionData?.admission?.applicant?.guardian_name,
                guardian_phone_code: admissionData?.admission?.applicant?.guardian_phone_code,
                guardian_phone_number: admissionData?.admission?.applicant?.guardian_phone_number,
                guardian_relationship: admissionData?.admission?.applicant?.guardian_relationship,
                educational_level: admissionData?.admission?.educational_level,
                accomodation_type: admissionData?.admission?.accomodation_type,
                identification_type: admissionData?.admission?.applicant?.identification_type,
                identification_number: admissionData?.admission?.applicant?.identification_number,
                emergency_contact_type: admissionData?.admission?.applicant?.emergency_contact_type
            });

            if (admissionData?.admission?.applicant?.passport) {
                setPassportImg([{
                    uid: "1",
                    name: admissionData?.admission?.applicant?.passport,
                    status: "done",
                    url: admissionData?.admission?.applicant?.passport
                }]);
            }

            if (admissionData?.admission?.educational_doc) {
                setEducationalDoc(admissionData?.admission?.educational_doc as unknown as File);
            }

            if (admissionData?.admission?.applicant?.identification_image) {
                setIdImage([{
                    uid: "1",
                    name: admissionData?.admission?.applicant?.identification_image,
                    status: "done",
                    url: admissionData?.admission?.applicant?.identification_image
                }]);
            }
        }

    }, [isEditMode, admissionData?.admission?.id, form, admissionData]);




    return (
        <div className="bg-white rounded-xl overflow-hidden">


            <div
            >
                <FormConfig >
                    {admissionData ?
                        <AdmissionDataTile onClear={() => resetAdmission()} />
                        : null
                    }
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onValuesChange={() => setShowError(false)}
                        scrollToFirstError
                        initialValues={{
                            educational_level: "No Formal Education",
                            nationality: "Ghana",
                            phone_code: "233",
                            mother_phone_code: "233",
                            father_phone_code: "233",
                            guardian_phone_code: "233"
                        }}
                    >
                        <div className="mb-4 bg-amber-50 border-l-4 border-amber-500 text-amber-800 px-4 py-3 rounded-md text-sm">
                            ⚠️ Please ensure that all information provided is accurate and truthful. False or misleading details may result in disqualification.
                        </div>


                        <FormGroup step={1} label="Personal Information">
                            <Form.Item label="Passport" name="image" className="md:col-span-2">
                                <div className="mb-5">
                                    <UploadImage
                                        value={passportImg}
                                        updateValue={(val) => setPassportImg(val)}
                                    />
                                </div>
                            </Form.Item>

                            <Form.Item
                                name="first_name"
                                label="First Name"
                                rules={[{ required: true, message: "Please enter first name" }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="First name"
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>



                            <Form.Item
                                name="last_name"
                                label="Last Name"
                                rules={[{ required: true, message: "Please enter last name" }]}
                            >
                                <Input
                                    size="large"
                                    placeholder="Last name"
                                />
                            </Form.Item>



                            <Form.Item
                                name="other_names"
                                label="Other Names"
                            >
                                <Input
                                    size="large"
                                    placeholder="Other names (optional)"
                                />
                            </Form.Item>





                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[{ required: true, message: "Please select gender" }]}
                            >
                                <Select size="large" placeholder="Select gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>
                            </Form.Item>



                            <Form.Item
                                name="date_of_birth"
                                label="Date of Birth"
                                rules={[{ required: true, message: "Please select date of birth" }]}
                            >
                                <DatePicker
                                    size="large"
                                    format="YYYY-MM-DD"
                                    style={{ width: '100%' }}
                                    placeholder="Select date of birth"
                                    disabledDate={(current) => current && current >= dayjs()}
                                />
                            </Form.Item>



                            <Form.Item
                                name="nationality"
                                label="Nationality"
                                rules={[{ required: true, message: "Please select nationality" }]}
                            >
                                <Select
                                    size="large"
                                    placeholder="Select nationality"
                                    showSearch
                                    optionFilterProp="children"
                                >
                                    {countries.map(country => (
                                        <Option key={country?.code} value={country?.name}>{country?.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>


                            <Form.Item
                                name="hometown"
                                label="Hometown"
                            >
                                <Input
                                    size="large"
                                    placeholder="Hometown (optional)"
                                />
                            </Form.Item>





                            <Form.Item
                                name="religion"
                                label="Religion"
                            >
                                <Input
                                    size="large"
                                    placeholder="Religion (optional)"
                                />
                            </Form.Item>



                        </FormGroup>

                        <FormGroup step={2} label="Identification Documents">
                            <Form.Item
                                name="identification_type"
                                label="Identification Type"
                            >
                                <Select
                                    placeholder="Select identification type"
                                    size="large"
                                    options={[
                                        { value: "ghana_card", label: "Ghana Card" },
                                        { value: "nhis", label: "NHIS" },
                                        { value: "passport", label: "Passport" },
                                        { value: "birth_cert", label: "Birth Certificate" },
                                        { value: "voters_id", label: "Voter’s ID" },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                name="identification_number"
                                label="Identification Number"
                            >
                                <Input
                                    size="large"
                                    placeholder="Enter identification number"
                                />
                            </Form.Item>

                            {/* Identification Image Upload */}
                            <Form.Item label="ID Image" name="identification_image" className="md:col-span-2">
                                <div className="mb-5">
                                    <UploadImage
                                        value={idImage}
                                        updateValue={(val) => setIdImage(val)}
                                    />
                                </div>
                            </Form.Item>
                        </FormGroup>


                        <FormGroup step={3} label="Contact Information">
                            <Form.Item
                                name="email"
                                label="Email Address"

                            >
                                <Input
                                    size="large"
                                    placeholder="Email address"
                                    prefix={<MailOutlined />}
                                />
                            </Form.Item>



                            <Form.Item
                                label="Phone"
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
                                        <Input placeholder="Enter phone number" style={{ width: "65%" }} size="large" />
                                    </Form.Item>
                                </Space.Compact>
                            </Form.Item>

                            <Form.Item
                                name="address"
                                label="Address"
                                className="md:col-span-2"
                            >
                                <TextArea
                                    rows={3}
                                    placeholder="Full address "
                                />
                            </Form.Item>
                            <Form.Item
                                name="digital_address"
                                label="Digital Address"
                                className="md:col-span-2"
                            >
                                <Input
                                    placeholder="Digital address (optional)"
                                    size="large"
                                />
                            </Form.Item>
                        </FormGroup>


                        <FormGroup step={4} label="Application Details" >




                            <Form.Item
                                name="educational_level"
                                label="Educational Level"
                                rules={[{ required: true, message: "Please select educational level" }]}
                            >
                                <Select size="large" placeholder="Select educational level">
                                    {educationalLevels.map(level => (
                                        <Option key={level} value={level}>{level}</Option>
                                    ))}
                                </Select>
                            </Form.Item>


                            {educationalLevel !== "No Formal Education" ? (
                                <Form.Item
                                    name="educational_doc"
                                    label="Educational Documents"
                                    valuePropName="fileList"
                                    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                                >
                                    <FileInput
                                        name="educational_doc"
                                        value={educationalDoc}
                                        onChange={(edu_doc) => {
                                            setEducationalDoc(edu_doc);
                                        }}
                                    />
                                </Form.Item>
                            ) : null}


                            <Form.Item
                                name="accomodation_type"
                                label="Accommodation Type"
                                rules={[{ required: true, message: "Please select accommodation type" }]}
                            >
                                <Select size="large" placeholder="Select accommodation type">
                                    <Option value="boarding">Boarding</Option>
                                    <Option value="day">Day</Option>
                                </Select>
                            </Form.Item>

                        </FormGroup>

                        <FormGroup step={5} label="Guardian/Parent Info">
                            <div className="grid md:grid-cols-2 md:col-span-2 md:gap-x-8">
                                {/* Father */}
                                <div>
                                    <Form.Item name="father_name" label="Father's Name">
                                        <Input size="large" placeholder="Father's name (optional)" />
                                    </Form.Item>

                                    <Form.Item name="father_occupation" label="Father's Occupation">
                                        <Input size="large" placeholder="Occupation (optional)" />
                                    </Form.Item>

                                    <Form.Item label="Father's Phone" className="w-full!">
                                        <Space.Compact className="w-full!">
                                            <Form.Item
                                                name="father_phone_code"
                                                noStyle
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
                                                name="father_phone_number"
                                                noStyle
                                            >
                                                <Input
                                                    placeholder="Enter phone number"
                                                    style={{ width: "65%" }}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Space.Compact>
                                    </Form.Item>
                                </div>

                                {/* Mother */}
                                <div>
                                    <Form.Item name="mother_name" label="Mother's Name">
                                        <Input size="large" placeholder="Mother's name (optional)" />
                                    </Form.Item>

                                    <Form.Item name="mother_occupation" label="Mother's Occupation">
                                        <Input size="large" placeholder="Occupation (optional)" />
                                    </Form.Item>

                                    <Form.Item label="Mother's Phone" className="w-full!">
                                        <Space.Compact className="w-full!">
                                            <Form.Item
                                                name="mother_phone_code"
                                                noStyle
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
                                                name="mother_phone_number"
                                                noStyle
                                            >
                                                <Input
                                                    placeholder="Enter phone number"
                                                    style={{ width: "65%" }}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Space.Compact>
                                    </Form.Item>
                                </div>
                            </div>

                            {/* Guardian Section */}
                            <div className="md:col-span-2 mt-5">
                                <h2 className="border-b mb-3 border-gray-200 pb-2">Guardian Details (optional)</h2>
                                <div className="grid md:grid-cols-2 md:gap-x-8">
                                    <Form.Item label="Guardian's Name" name="guardian_name">
                                        <Input size="large" placeholder="Guardian's name" />
                                    </Form.Item>

                                    <Form.Item label="Guardian's Relationship" name="guardian_relationship">
                                        <Select
                                            size="large"
                                            options={relationshipOptions}
                                        />
                                    </Form.Item>

                                    <Form.Item label="Guardian's Phone" className="w-full!">
                                        <Space.Compact className="w-full!">
                                            <Form.Item name="guardian_phone_code" noStyle>
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

                                            <Form.Item name="guardian_phone_number" noStyle>
                                                <Input
                                                    placeholder="Enter phone number"
                                                    style={{ width: "65%" }}
                                                    size="large"
                                                />
                                            </Form.Item>
                                        </Space.Compact>
                                    </Form.Item>
                                </div>
                            </div>


                            <Form.Item
                                name="emergency_contact_type"
                                label="Set as Emergency Contact"
                                rules={[{ required: true, message: "Please select an emergency contact" }]}
                            >
                                <Select
                                    placeholder="Select contact type"
                                    size="large"
                                    options={[
                                        { value: "guardian", label: "Guardian" },
                                        { value: "mother", label: "Mother" },
                                        { value: "father", label: "Father" },
                                    ]}
                                />
                            </Form.Item>

                        </FormGroup>

                        {showError && error && (
                            <FormErrorAlert
                                message={parseApiError(error as RequestError)}
                            />
                        )}

                        <div className="flex justify-center space-x-4 mt-8">
                            <Button
                                size="large"
                                onClick={() => onBack()}
                                disabled={saving}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                htmlType="submit"
                                loading={saving}
                            >
                                {isEditMode ? "Update Application" : "Submit Application"}
                            </Button>
                        </div>




                    </Form>
                </FormConfig>
            </div>


        </div>
    );
};

type FormGroupProps = {
    label: string;
    children: ReactNode;
    step: number;
}

const FormGroup = ({ label, children, step }: FormGroupProps) => {
    return (
        <div className=" border-x border-b rounded-2xl border-gray-200  mb-12">
            <h2 className="mb-5 rounded-t-2xl px-6 border-b py-3  bg-blue-500 text-white border-gray-200  flex items-center">
                <span className="h-4 rounded-full justify-center w-4 text-[8px] flex items-center bg-white text-blue-600 mr-2"> {step} </span>
                {label}
            </h2>
            <div className="grid  p-6 md:grid-cols-2 md:gap-x-8">
                {children}
            </div>
        </div>
    )
}




const AdmissionDataTile = ({ onClear }: { onClear: () => void }) => {
    return (
        <div className="flex items-center justify-between border border-green-200 bg-green-50 p-4 rounded-xl">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={20} />
                <span className="text-green-700 font-medium">Admission data found</span>
            </div>
            <Button
                onClick={onClear}
                className="flex items-center gap-1"
            >
                <Trash2 size={14} />
                Clear
            </Button>
        </div>
    );
};




export default AdmissionApplicationForm;