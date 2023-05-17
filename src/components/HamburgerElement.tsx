import Image from "next/image";

interface HamburgerElementProps {
  onClick: () => void;
  name: string;
  source: string;
  isLogout?: boolean;
}

const HamburgerElement = ({ onClick, name, source, isLogout = false }: HamburgerElementProps) => {
  if (!isLogout) {
    return <div className="flex items-center pl-4 pr-6 pt-12 first:pt-10">
      <Image width={40} height={40} src={source} alt={name} className="text-white cursor-pointer mr-3.5" onClick={onClick}></Image>
      <span className="text-white text-2xl">{name}</span>
    </div>;
  }
  return <div className="flex items-center pl-4 pr-6 pt-40 first:pt-10">
    <Image width={40} height={40} src={source} alt={name} className="text-red-600 cursor-pointer mr-3.5" onClick={onClick}></Image>
    <span className="text-red-600 text-2xl">{name}</span>
  </div>;
}

export default HamburgerElement