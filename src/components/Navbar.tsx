import Image from "next/image";
import burger from "public/burger.png";
import cross from "public/cross.png";
import { useEffect, useState } from "react";


interface NavbarProps {
  onHamburgerClick: () => void;
  onAccountClick: () => void;
  hamburgerShown: boolean;
  setHamburgerShown: (value: boolean) => void;
}

const Navbar = (props: NavbarProps) => {
  const [hamburgerImage, setHamburgerImage] = useState<string>(burger.src);
  const onHamburgerClick = () => {
    props.onHamburgerClick();
    props.setHamburgerShown(!props.hamburgerShown);    
  };

  useEffect(() => {
      if (props.hamburgerShown) {
        setHamburgerImage(cross.src);
      } else {
        setHamburgerImage(burger.src);
      }
    },
    [props.hamburgerShown]
  );

  return (
    <div className="flex bg-[#5BAC36] items-center h-[10%] justify-between">
      <button onClick={onHamburgerClick} className="ml-3.5">
        <Image width="40" height="33" alt="Hamburger" priority={true} src={hamburgerImage}></Image>
      </button>
      <button onClick={props.onAccountClick}>
        <Image width="58" height="61" alt="Account" src="/userIcon/profile-user.png" priority={true} className="mr-3.5  "></Image>
      </button>
    </div>
  );
};

export default Navbar;