import { Head, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Portal";
import { getApplicantFullName } from "@/utils/getInitials";
import { ListTile } from "../Staff/Admissions/components/ListTile";
import { Applicant, Application } from "@/types/admission";
import { Image, Modal } from "antd";
import UpdatePasswordForm from "./UpdatePasswordForm";
import { useModalProps } from "@/utils/useModal";
import UpdatePassport from "./UpdatePassport";

const Profile = () => {
    const { application } = usePage<{
        application: Application;
    }>().props;

    const { applicant } = application;

    const { closeModal, modalOpen, updateModal } = useModalProps();

    return (
        <Layout>
            <Head title="Profile " />
            <section className="min-h-full p-5 bg-white lg:p-10">
                <h3 className="mb-4 text-xl font-semibold text-blue-900">
                    Profile
                </h3>
                <div className="items-end justify-end hidden space-x-3 lg:flex">
                    <button
                        onClick={() => updateModal(null, "edit")}
                        className="px-2 text-sm text-blue-600 border-blue-300 min-w-fit border rounded-md py-[2px] hover:border-blue-600 hover:text-blue-800 active:opacity-30"
                    >
                        change password
                    </button>
                    <button
                        onClick={() => updateModal(applicant, "other")}
                        className="px-2 min-w-fit text-sm text-blue-600 border-blue-300 border rounded-md py-[2px] hover:border-blue-600 hover:text-blue-800 active:opacity-30"
                    >
                        update passport picture
                    </button>
                </div>

                <ListTile
                    label="Applicant Name"
                    value={getApplicantFullName(applicant)}
                />

                <ListTile
                    label="Passport Pic"
                    value={
                        applicant?.passport ? (
                            <Image
                                src={applicant?.passport}
                                alt="passport pic"
                                style={{ width: "200px", marginTop: "5px" }}
                            />
                        ) : (
                            "N/A"
                        )
                    }
                />

                <ListTile
                    label="Date of Birth"
                    value={new Date(applicant?.date_of_birth).toDateString()}
                />

                <ListTile label="Phone" value={applicant?.phone} />

                <ListTile label="Address" value={applicant?.address} />

                <ListTile
                    label="Nationality"
                    value={applicant?.nationality?.name}
                />

                <ListTile label=" Year " value={application.application_year} />

                <ListTile
                    label="Eduational Level"
                    value={application?.educational_level?.split("-").join(" ")}
                />

                <ListTile
                    label="Mother's Name"
                    value={applicant?.mother_name}
                />
                <ListTile
                    label="Mother's Occupation"
                    value={applicant?.mother_occupation}
                />
                <ListTile
                    label="Mother's Phone"
                    value={applicant?.mother_phone}
                />

                <ListTile
                    label="Father's Name"
                    value={applicant?.father_name}
                />
                <ListTile
                    label="Father's Occupation"
                    value={applicant?.father_occupation}
                />
                <ListTile
                    label="Father's Phone"
                    value={applicant?.father_phone}
                />

                <div className="flex items-center mt-10 space-x-3 lg:hidden">
                    <button
                        onClick={() => updateModal(null, "edit")}
                        className="px-2 text-sm text-blue-600 border-blue-300 min-w-fit border rounded-md py-[2px] hover:border-blue-600 hover:text-blue-800 active:opacity-30"
                    >
                        change password
                    </button>
                    <button
                        onClick={() => updateModal(applicant, "other")}
                        className="px-2 min-w-fit text-sm text-blue-600 border-blue-300 border rounded-md py-[2px] hover:border-blue-600 hover:text-blue-800 active:opacity-30"
                    >
                        update passport picture
                    </button>
                </div>
            </section>
            <Modal open={modalOpen.open} onCancel={closeModal} footer={null}>
                {modalOpen.type === "edit" && (
                    <UpdatePasswordForm
                        closeModal={closeModal}
                        mode="add"
                        className="px-3 pt-2 pb-4"
                    />
                )}

                {modalOpen.type === "other" && (
                    <UpdatePassport
                        closeModal={closeModal}
                        mode={modalOpen.type}
                        data={modalOpen.data as Applicant}
                        className={"px-3 pt-2 pb-4"}
                    />
                )}
            </Modal>
        </Layout>
    );
};

export default Profile;
