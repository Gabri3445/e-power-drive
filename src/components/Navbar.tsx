import Image from "next/image";
import burger from "public/burger.png";
import cross from "public/cross.png";
import { useEffect, useState } from "react";

interface NavbarProps {
  onHamburgerClick: () => void;
  onAccountClick: () => void;
}

const Navbar = (props: NavbarProps) => {
  const [hamburgerShown, setHamburgerShown] = useState<boolean>(false);
  const [hamburgerImage, setHambugerImage] = useState<string>(burger.src);

  const onHamburgerClick = () => {
    props.onHamburgerClick();
    setHamburgerShown(!hamburgerShown);
  };

  useEffect(() => {
      if (hamburgerShown) {
        setHambugerImage(cross.src);
      } else {
        setHambugerImage(burger.src);
      }
    },
    [hamburgerShown]
  );

  return (
    <div className="flex bg-[#61B038] items-center h-[73px] justify-between">
      <button onClick={onHamburgerClick} className="ml-3.5">
        <Image width="40" height="33" alt="Hamburger" src={hamburgerImage}></Image>
      </button>
      <button onClick={props.onAccountClick}>
        <Image width="58" height="61" alt="Account" src="/logo.svg" className="mr-3.5"></Image>
      </button>
    </div>
  );
};

export default Navbar;