import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Wrapper from "./Wrapper";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const PortalLogin = () => {
    return (
        <Wrapper step={3}>
            <p className="mb-1 font-semibold text-center text-gray-800 ">
                PORTAL LOGIN
            </p>
            <p className="w-[55%] mx-auto mb-8 text-center">
                Use credentials from SMS sent to your number after payment of
                application fee to login
            </p>
            <PortalLoginForm />
        </Wrapper>
    );
};

export default PortalLogin;

 const PortalLoginForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("portal.login.handle"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="p-10 border rounded-3xl max-w-[500px] mx-auto">
            <form
                onSubmit={submit}
                className="max-w-[400px] pb-2 mx-auto lg:pb-0"
            >
                <div className="mb-5">
                    <h4 className="flex items-center p-[3px] w-[48px] mb-1 h-[48px] justify-center mx-auto  text-xl font-bold text-white rounded-full shadow-2xl bg-blue-600 lg:w-[38px] lg:h-[38px] lg:text-lg">
                        BFS
                    </h4>
                    <span className="block text-[13px] text-center text-gray-600 lg:hidden">
                        Bethel Fashion School Login
                    </span>
                </div>

                <div className="mb-6 text-center">
                    <h4 className="text-3xl font-semibold">Welcome </h4>
                    <p className="-mt-1 text-gray-500 ">
                        Please enter your credentials to login
                    </p>
                </div>
                <div>
                    <InputLabel htmlFor="Phone Number" value="Phone Number" />

                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="block w-full py-3 mt-1"
                        placeholder="enter registered phone here"
                        isFocused={true}
                        onChange={(e) => setData("phone", e.target.value)}
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="enter password here"
                        value={data.password}
                        className="block w-full py-3 mt-1"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <PrimaryButton
                    className="justify-center w-full py-3 mt-6 text-center "
                    disabled={processing}
                >
                    Log in
                </PrimaryButton>
            </form>
        </div>
    );
};
