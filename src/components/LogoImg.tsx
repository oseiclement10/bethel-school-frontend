import logo from "@/assets/images/logo.png";

const LogoImg = ({className}:{className?:string}) => {
    return <img src={logo} alt="crown image" className={`w-8 ${className}`} />;
};

export default LogoImg;
