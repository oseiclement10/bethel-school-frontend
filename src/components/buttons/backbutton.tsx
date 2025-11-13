import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

type Props = {
    backLink?: string;
    label?: string;
    className?: string;
    onClick?: () => void
}

export const GoBackBtn = ({ backLink, label, className, onClick }: Props) => {

    const navigate = useNavigate();

    const goBack = () => {
        if (onClick) {
            onClick()
            return;
        }
        if (backLink) {
            navigate(backLink);
            return;
        }
        else {
            navigate(-1);
        }
    }


    return (
        <button onClick={() => goBack()} className={`border px-3 ml-auto  text-sm py-1 rounded-md flex items-center  bg-white hover:border-blue-300 hover:text-blue-600 transition-all ease-in-out ${className ?? ""}`}>
            <IoMdArrowBack className='mr-1' />  {label ?? "Go Back"}
        </button>
    )
}

