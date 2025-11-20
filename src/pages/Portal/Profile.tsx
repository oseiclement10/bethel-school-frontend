import type { AdmissionApplication, Applicant } from "@/@types/entities";
import { Image, Modal, Card, Tag } from "antd";
import UpdatePasswordForm from "./UpdatePasswordForm";
import { useModalProps } from "@/hooks/use-modal";
import UpdatePassport from "./UpdatePassport";
import type { RequestError } from "@/@types/error";
import useQueryFetch from "@/hooks/use-query-fetch";
import { queryKeys } from "@/lib/query-keys";
import { getHelper } from "@/services/apiService";
import { SpinLoad } from "@/components/crud/loading";
import { ApplicationNotFoundCard } from "./ApplicationNotFound";
import {
    User,
    Phone,
    MapPin,
    Globe,
    Calendar,
    Book,
    Users,
    Edit3,
    Camera
} from "lucide-react";
import { FormConfig } from "@/components/crud/form-config";

const Profile = () => {
    const { data, isLoading } = useQueryFetch<AdmissionApplication, RequestError>({
        queryFn: () => getHelper("portal/admission/details"),
        title: "Admission Details",
        queryKeys: [queryKeys.admissionDetails]
    });

    const { closeModal, modalOpen, updateModal } = useModalProps();

    if (isLoading) return <SpinLoad caption="Profile Section " message="Loading profile details , please wait" />;
    if (!data) return <ApplicationNotFoundCard />;

    return (
        <div className="min-h-full font-poppins bg-gray-50 p-4 lg:p-6">
            {/* Header Section */}
            <Card className="mb-6! shadow-sm border-0">
                <div className="flex font-poppins flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <User className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {data?.applicant?.full_name}
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Application Year: <span className="font-semibold">{data.application_year}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => updateModal(null, "edit")}
                            className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 font-medium"
                        >
                            <Edit3 className="w-4 h-4" />
                            Change Password
                        </button>
                        <button
                            onClick={() => updateModal(data?.applicant, "other")}
                            className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 font-medium"
                        >
                            <Camera className="w-4 h-4" />
                            Update Passport
                        </button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Personal Information */}
                <Card
                    title={
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-600" />
                            <span className="text-lg font-semibold text-gray-900">Personal Information</span>
                        </div>
                    }
                    className="shadow-sm border-0 lg:col-span-2"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Passport Photo */}
                        <div className="md:col-span-2">
                            <InfoTile
                                label="Passport Photo"
                                value={
                                    data?.applicant?.passport ? (
                                        <div className="mt-2">
                                            <Image
                                                src={data.applicant.passport}
                                                alt="Passport photo"
                                                className="rounded-lg border border-gray-200"
                                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                                preview={{
                                                    mask: <span className="text-sm">View</span>
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <Tag color="orange" className="mt-1">Not Uploaded</Tag>
                                    )
                                }
                            />
                        </div>

                        <InfoTile
                            label="Date of Birth"
                            value={new Date(data?.applicant?.date_of_birth).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                            icon={<Calendar className="w-4 h-4" />}
                        />

                        <InfoTile
                            label="Phone Number"
                            value={`${data?.applicant?.phone_code || ''} ${data?.applicant?.phone_number || ''}`}
                            icon={<Phone className="w-4 h-4" />}
                        />

                        <InfoTile
                            label="Nationality"
                            value={data?.applicant?.nationality}
                            icon={<Globe className="w-4 h-4" />}
                        />

                        <InfoTile
                            label="Address"
                            value={data?.applicant?.address}
                            icon={<MapPin className="w-4 h-4" />}
                            className="md:col-span-2"
                        />
                    </div>
                </Card>

                {/* Academic Information */}
                <Card
                    title={
                        <div className="flex items-center gap-2">
                            <Book className="w-5 h-5 text-green-600" />
                            <span className="text-lg font-semibold text-gray-900">Academic Information</span>
                        </div>
                    }
                    className="shadow-sm border-0"
                >
                    <div className="space-y-4">
                        <InfoTile
                            label="Application Year"
                            value={data.application_year}
                        />
                        <InfoTile
                            label="Educational Level"
                            value={data?.educational_level?.split("-").join(" ")}
                        />
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <div className="text-sm text-blue-700">
                                <div className="font-medium">Status: </div>
                                <Tag color="blue" className="mt-1">Application Submitted</Tag>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Family Information */}
                <Card
                    title={
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            <span className="text-lg font-semibold text-gray-900">Family Information</span>
                        </div>
                    }
                    className="shadow-sm border-0 lg:col-span-3"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Mother's Information */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3 ">Mother's Details</h4>
                            <div className="space-y-3">
                                <InfoTile label="Full Name" value={data?.applicant?.mother_name} compact />
                                <InfoTile label="Occupation" value={data?.applicant?.mother_occupation} compact />
                                <InfoTile
                                    label="Phone"
                                    value={`${data?.applicant?.mother_phone_code || ''} ${data?.applicant?.mother_phone_number || ''}`}
                                    compact
                                />
                            </div>
                        </div>

                        {/* Father's Information */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3 ">Father's Details</h4>
                            <div className="space-y-3">
                                <InfoTile label="Full Name" value={data?.applicant?.father_name} compact />
                                <InfoTile label="Occupation" value={data?.applicant?.father_occupation} compact />
                                <InfoTile
                                    label="Phone"
                                    value={`${data?.applicant?.father_phone_code || ''} ${data?.applicant?.father_phone_number || ''}`}
                                    compact
                                />
                            </div>
                        </div>

                        {/* Guardian's Information */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3 ">Guardian's Details</h4>
                            <div className="space-y-3">
                                <InfoTile label="Full Name" value={data?.applicant?.guardian_name} compact />
                                <InfoTile label="Relationship" value={data?.applicant?.guardian_relationship} compact />
                                <InfoTile
                                    label="Phone"
                                    value={`${data?.applicant?.guardian_phone_code || ''} ${data?.applicant?.guardian_phone_number || ''}`}
                                    compact
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Modals */}
            <Modal
                open={modalOpen.open}
                onCancel={closeModal}
                footer={null}
                centered
                className="profile-modals"
            >
                <FormConfig>
                    {modalOpen.type === "edit" && (
                        <UpdatePasswordForm
                            closeModal={closeModal}

                        />
                    )}

                    {modalOpen.type === "other" && (
                        <UpdatePassport
                            closeModal={closeModal}
                            data={modalOpen.data as Applicant}

                        />
                    )}
                </FormConfig>

            </Modal>
        </div>
    );
};

// Improved InfoTile Component
type InfoTileProps = {
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    compact?: boolean;
}

const InfoTile = ({ label, value, icon, className = "", compact = false }: InfoTileProps) => {
    return (
        <div className={`${className} ${compact ? 'space-y-1' : 'space-y-2'} font-poppins`}>
            <div className={`flex items-center gap-2 ${compact ? 'text-sm' : 'text-base'}`}>
                {icon}
                <span className={`font-medium text-gray-600 ${compact ? 'text-sm' : ''}`}>
                    {label}
                </span>
            </div>
            <div className={`font-poppins text-gray-900 ${compact ? 'text-sm' : 'text-base'} ${!value && 'text-gray-400'}`}>
                {value || "Not provided"}
            </div>
        </div>
    );
};

export default Profile;