import Image from "next/image";
import { useCookies } from "react-cookie";


interface HamburgerElementProps {
  onClick: () => void;
  name: string;
  source: string;
  isLogout?: boolean;
}

const HamburgerElement = ({ onClick, name, source, isLogout = false }: HamburgerElementProps) => {

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  if (!isLogout) {
    return <div className="flex items-center ml-4 mr-6 mt-12 first:mt-0 cursor-pointer" onClick={onClick}>
      <Image width={40} height={40} src={source} alt={name} className="text-white mr-3.5"></Image>
      <span className="text-white text-2xl">{name}</span>
    </div>;
  }

  const onLogoutClick = () => {
    removeCookie("token", {path: "/"});
    window.location.reload();
  }

  return <div className="flex items-center ml-4 mr-6 mt-40 cursor-pointer" onClick={onLogoutClick}>
    <Image width={40} height={40} src={source} alt={name} className="text-red-600 mr-3.5"></Image>
    <span className="text-red-600 text-2xl">{name}</span>
  </div>;
};

export default HamburgerElement;