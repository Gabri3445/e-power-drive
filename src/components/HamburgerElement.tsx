import Image from "next/image";

interface HamburgerElementProps {
  onClick: () => void;
  name: string;
  source: string;
}

const HamburgerElement = (props: HamburgerElementProps) => {
  return <div className="flex items-center pl-4 pr-6 pt-12 first:pt-10">
    <Image width={40} height={40} src={props.source} alt={props.name} className="text-white cursor-pointer mr-3.5" onClick={props.onClick}></Image>
    <span className="text-white text-2xl">{props.name}</span>
  </div>;
}

export default HamburgerElement