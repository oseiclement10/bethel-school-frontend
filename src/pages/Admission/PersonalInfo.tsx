import Wrapper from "./Wrapper";
import { useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import FieldGroup from "@/Components/Form/FieldGroup";
import FormFooter from "@/Components/Form/FormFooter";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import FileInput from "@/Components/Form/FileInput";
import { notification, Select, UploadFile } from "antd";
import { Country } from "@/types/common";
import { parseErrors } from "@/utils/parseErrors";
import UploadImage, { setupImageForDisplay } from "@/Components/ImageUpload";
import { educationalOptions } from "@/lib/data/educationalOptions";
import { Applicant } from "@/types/admission";
const PersonalInfo = () => {
    return (
        <Wrapper step={1}>
            <p className="mb-6 font-semibold text-center text-gray-800 ">
                ADMISSION APPLICATION
            </p>

            <ApplicantInfoForm mode="create" />
        </Wrapper>
    );
};

type PersonalInfoFormProps = {
    mode: "create" | "edit";
    applicant?: Applicant;
}

export const ApplicantInfoForm = ({ mode, applicant }: PersonalInfoFormProps) => {
    const { countries } = usePage<{ countries: Country[] }>().props;
    const isEditMode = mode == "edit" && applicant?.id;

    const { data, setData, errors, processing, post, hasErrors, transform, wasSuccessful } =
        useForm({
            firstname: isEditMode ? applicant?.firstname : "",
            surname: isEditMode ? applicant?.surname : "",
            othernames: isEditMode ? applicant?.othernames : "",
            passport: (isEditMode && applicant?.passport) ? applicant?.passport : undefined as unknown as UploadFile<any>,
            phone: isEditMode ? applicant?.phone : "",
            email: isEditMode ? applicant?.email : "",
            address: isEditMode ? applicant?.address : "",
            place_of_birth: isEditMode ? applicant.place_of_birth : "",
            date_of_birth: isEditMode ? new Date(applicant.date_of_birth).toISOString().split("T")[0] : "",
            religion: isEditMode ? applicant.religion : "",
            hometown: isEditMode ? applicant.hometown : "",
            nationality_id: 81,
            educational_level: "",
            educational_doc: "",
            father_name: isEditMode ? applicant.father_name : "",
            father_phone: isEditMode ? applicant.father_phone : "",
            father_occupation: isEditMode ? applicant.father_occupation : "",
            mother_name: isEditMode ? applicant.mother_name : "",
            mother_occupation: isEditMode ? applicant.mother_occupation : "",
            mother_phone: isEditMode ? applicant.mother_phone : "",
            guardian_name: isEditMode ? applicant.guardian_name : "",
            guardian_phone: isEditMode ? applicant.guardian_phone : "",
        });



    transform((data) => {
        if (typeof data.passport === "object") {
            data.passport = data.passport?.originFileObj as UploadFile;
        }
        return data;
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEditMode) {
            post(route("admission.applicant.update", applicant.id), {
                forceFormData: true
            })
        } else {
            post(route("admission.saveInfo"), {
                forceFormData: true,
            });
        }

    };

    useEffect(() => {
        if (hasErrors) {
            notification.error({
                message: parseErrors(errors),
                duration: 8,
            });
        }
    }, [hasErrors, errors]);

    useEffect(() => {
        if (isEditMode && wasSuccessful) {
            const doc = document.getElementById("top");
            doc?.scrollIntoView({ behavior: "smooth" });
            notification.success({ message: "Applicant information updated successfully", duration: 8 });
        }
    }, [isEditMode, wasSuccessful])

    return (
        <form onSubmit={handleSubmit} className="grid ">
            <div id="top"></div>
            <FormGroupContainer
                groupLabel={
                    <span className="ml-2 lg:ml-4">Personal Information</span>
                }
            >
                <div className="grid gap-6 mb-4 lg:gap-8 lg:mb-0">
                    <FieldGroup
                        label="Passport Picture"
                        name="passport"
                        error={errors.passport}
                    >
                        <UploadImage
                            value={setupImageForDisplay(
                                data.passport,
                                "applicantion"
                            )}
                            updateValue={(val) => {
                                setData("passport", val[0]);
                            }}
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Firstname"
                        name="firstname"
                        error={errors.firstname}
                    >
                        <TextInput
                            name="firstname"
                            type="text"
                            placeholder="enter firstname "
                            required
                            value={data.firstname}
                            onChange={(e) =>
                                setData("firstname", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Surname"
                        name="surname"
                        error={errors.surname}
                    >
                        <TextInput
                            name="surname"
                            type="text"
                            placeholder="enter surname "
                            required
                            value={data.surname}
                            onChange={(e) => setData("surname", e.target.value)}
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Othername(s)"
                        name="othernames"
                        error={errors.othernames}
                    >
                        <TextInput
                            name="othernames"
                            type="text"
                            placeholder="enter othernames "
                            value={data.othernames}
                            onChange={(e) =>
                                setData("othernames", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label={
                            <span>
                                Phone Number{" "}
                                <span className="text-rose-600">
                                    (Make sure this number is active)
                                </span>
                            </span>
                        }
                        name="phone"
                        error={errors.phone}
                    >
                        <TextInput
                            name="phone"
                            type="text"
                            placeholder="enter phone "
                            required
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                    </FieldGroup>

                    <FieldGroup label="Email" name="email" error={errors.email}>
                        <TextInput
                            name="email"
                            type="text"
                            placeholder="enter email "
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </FieldGroup>
                </div>
                <div className="grid gap-6 lg:gap-8">
                    <FieldGroup
                        label="Address"
                        name="address"
                        error={errors.address}
                    >
                        <TextInput
                            name="address"
                            type="text"
                            placeholder="enter address"
                            required
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Date of Birth"
                        name="date_of_birth"
                        error={errors.date_of_birth}
                    >
                        <input
                            type="date"
                            name="date_of_birth"
                            id="date_of_birth"
                            required
                            value={data.date_of_birth}
                            onChange={(e) =>
                                setData("date_of_birth", e.target.value)
                            }
                            className="w-full border-gray-400 rounded-md cursor-pointer"
                        />
                    </FieldGroup>



                    <FieldGroup
                        label="Religion"
                        name="religion"
                        error={errors.religion}
                    >
                        <TextInput
                            name="religion"
                            type="text"
                            placeholder="enter religion"
                            required
                            value={data.religion}
                            onChange={(e) =>
                                setData("religion", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Hometown"
                        name="hometown"
                        error={errors.hometown}
                    >
                        <TextInput
                            name="hometown"
                            type="text"
                            placeholder="enter hometown"
                            required
                            value={data.hometown}
                            onChange={(e) =>
                                setData("hometown", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Nationality"
                        name="nationality_id"
                        error={errors.nationality_id}
                    >
                        <Select
                            placeholder="select country of origin"
                            size="large"
                            showSearch
                            optionFilterProp="label"
                            options={countries?.map((elem) => ({
                                label: elem.name,
                                value: elem.id,
                            }))}
                            value={data.nationality_id}
                            onChange={(val) => setData("nationality_id", val)}
                            style={{
                                width: "100%",
                            }}
                            aria-required
                        />
                    </FieldGroup>
                </div>
            </FormGroupContainer>
            {!isEditMode && (
                <FormGroupContainer
                    groupLabel={
                        <span className="ml-2 lg:ml-4">Educational Background</span>
                    }
                >
                    <FieldGroup
                        label="Educational Level"
                        name="educational_level"
                        error={errors.educational_level}
                    >
                        <div className="w-full pb-3 bg-trasnsparent"></div>
                        <Select
                            placeholder="select educational level"
                            size="large"
                            showSearch
                            optionFilterProp="label"
                            options={educationalOptions}
                            value={data.educational_level}
                            onChange={(val) => setData("educational_level", val)}
                            style={{
                                width: "100%",
                            }}
                            aria-required
                        />
                    </FieldGroup>
                    {data.educational_level &&
                        data.educational_level !== "no-formal-education" && (
                            <div className="mt-6 lg:mt-0">
                                <FieldGroup
                                    label="Educational Document (BECE for primary, Wassce for secondary, Degree for tertiary etc)"
                                    name="educational_doc"
                                    error={errors.educational_doc}
                                >
                                    <FileInput
                                        name="educational_doc"
                                        accept="image/*"
                                        error={errors.educational_doc}
                                        value={data.educational_doc}
                                        onChange={(educational_doc) => {
                                            setData(
                                                "educational_doc",
                                                educational_doc as unknown as string
                                            );
                                        }}
                                    />
                                </FieldGroup>
                            </div>
                        )}
                </FormGroupContainer>
            )}


            <FormGroupContainer
                groupLabel={<span className="ml-2 lg:ml-4">Parent Info</span>}
            >
                <div className="grid gap-6 mb-4 lg:gap-8 lg:mb-0">
                    <FieldGroup
                        label="Father's Name"
                        name="father_name"
                        error={errors.father_name}
                    >
                        <TextInput
                            name="father_name"
                            type="text"
                            placeholder="enter father's name"
                            required
                            value={data.father_name}
                            onChange={(e) =>
                                setData("father_name", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Father's Occupation"
                        name="father_occupation"
                        error={errors.father_occupation}
                    >
                        <TextInput
                            name="father_occupation"
                            type="text"
                            placeholder="enter father's occupation"
                            required
                            value={data.father_occupation}
                            onChange={(e) =>
                                setData("father_occupation", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Father's Phone"
                        name="father_phone"
                        error={errors.father_phone}
                    >
                        <TextInput
                            name="father_phone"
                            type="text"
                            placeholder="enter father's phone"
                            required
                            value={data.father_phone}
                            onChange={(e) =>
                                setData("father_phone", e.target.value)
                            }
                        />
                    </FieldGroup>
                </div>
                <div className="grid gap-4 lg:gap-8">
                    <FieldGroup
                        label="Mother's Name"
                        name="mother_name"
                        error={errors.mother_name}
                    >
                        <TextInput
                            name="mother_name"
                            type="text"
                            placeholder="enter mother's name"
                            required
                            value={data.mother_name}
                            onChange={(e) =>
                                setData("mother_name", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Mother's Phone"
                        name="mother_phone"
                        error={errors.mother_phone}
                    >
                        <TextInput
                            name="mother_phone"
                            type="text"
                            placeholder="enter mother's phone"
                            required
                            value={data.mother_phone}
                            onChange={(e) =>
                                setData("mother_phone", e.target.value)
                            }
                        />
                    </FieldGroup>

                    <FieldGroup
                        label="Mother's Occupation"
                        name="mother_occupation"
                        error={errors.mother_occupation}
                    >
                        <TextInput
                            name="mother_occupation"
                            type="text"
                            placeholder="enter mother's occupation"
                            required
                            value={data.mother_occupation}
                            onChange={(e) =>
                                setData("mother_occupation", e.target.value)
                            }
                        />
                    </FieldGroup>
                </div>
            </FormGroupContainer>

            <FormGroupContainer
                groupLabel={
                    <span className="ml-2 lg:ml-4">
                        Guardian Info (optional)
                    </span>
                }
            >
                <FieldGroup
                    label="Guardian's Name"
                    name="guardian_name"
                    error={errors.guardian_name}
                >
                    <TextInput
                        name="guardian_name"
                        type="text"
                        placeholder="enter guardian's name"
                        value={data.guardian_name}
                        onChange={(e) =>
                            setData("guardian_name", e.target.value)
                        }
                    />
                </FieldGroup>

                <FieldGroup
                    label="Guardian's Phone"
                    name="guardian_phone"
                    error={errors.guardian_phone}
                >
                    <TextInput
                        name="guardian_phone"
                        type="text"
                        placeholder="enter guardian's phone"
                        value={data.guardian_phone}
                        onChange={(e) =>
                            setData("guardian_phone", e.target.value)
                        }
                    />
                </FieldGroup>
            </FormGroupContainer>

            <FormFooter
                label={isEditMode ? "Save Changes " : "Apply & Continue"}
                loading={processing}
                hideCancel
            />
        </form>
    );
};

const FormGroupContainer = ({
    groupLabel,
    children,
}: PropsWithChildren & { groupLabel: ReactNode }) => {
    return (
        <div className="p-3 mt-4 mb-4 border border-blue-100 rounded-lg lg:mt-0 lg:rounded-2xl lg:p-10 lg:mb-8 ">
            <div className="mb-3 text-blue-800 ">{groupLabel}</div>
            <div className="grid gap-4 p-2 lg:p-4 lg:gap-8 lg:grid-cols-2">
                {children}
            </div>
        </div>
    );
};

export default PersonalInfo;
