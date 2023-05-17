import Image from "next/image";

interface HamburgerElementProps {
  onClick: () => void;
  name: string;
  source: string;
}

const HamburgerElement = (props: HamburgerElementProps) => {
  return <div className="flex">
    <Image width={40} height={40} src={props.source} alt={props.name}></Image>
    <span>{props.name}</span>
  </div>;
}

export default HamburgerElement