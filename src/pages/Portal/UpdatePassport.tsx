import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import ThemeButton from "@/Components/ThemeButton";
import { useForm } from "@inertiajs/react";
import { Button, notification, UploadFile } from "antd";
import { OverlayProps } from "@/types/common";
import { Applicant } from "@/types/admission";
import FieldGroup from "@/Components/Form/FieldGroup";
import UploadImage, { setupImageForDisplay } from "@/Components/ImageUpload";

type UpdateProfileProps = OverlayProps<Applicant> & {
    className?: string;
};

export default function UpdatePassport({
    className = "",
    data: applicant,
    closeModal,
}: UpdateProfileProps) {
    const { data, setData, errors, processing, post, transform, reset } =
        useForm({
            _method: "put",
            passport:
                applicant?.passport ??
                (undefined as unknown as UploadFile<any>),
            current_password: "",
        });

    transform((data) => {
        if (typeof data.passport === "object") {
            data.passport = data.passport?.originFileObj as UploadFile;
        }
        return data;
    });

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        post(route("portal.profile.update-passport", applicant?.id), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                closeModal();
                notification.success({
                    message: "Passport Picture Updated successfully",
                });
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Update Passport
                </h2>
            </header>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <FieldGroup
                    label="Passport Picture"
                    name="passport"
                    error={errors.passport}
                >
                    <UploadImage
                        value={setupImageForDisplay(
                            data.passport,
                            "updateimage"
                        )}
                        updateValue={(val) => {
                            setData("passport", val[0]);
                        }}
                    />
                </FieldGroup>

                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Enter Password"
                    />

                    <TextInput
                        id="current_password"
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        required
                        className="block w-full mt-1"
                        autoComplete="current-password"
                    />

                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-end space-x-3 jutify-end">
                        <Button onClick={() => closeModal()}>Cancel</Button>
                        <ThemeButton disabled={processing}>
                            Save Changes{" "}
                        </ThemeButton>
                    </div>
                </div>
            </form>
        </section>
    );
}
