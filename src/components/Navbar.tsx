import Image from "next/image";
import Hamburger from "./Hamburger";

interface NavbarProps {
    onHamburgerClick: () => void
    onAccountClick: () => void
}

const Navbar = (props : NavbarProps) => {
    return (
        <div className="flex justify-between bg-[#61B038] items-center ">
        <button onClick={props.onHamburgerClick}>
            <Image width="64" height="64" alt="Hamburger" src="/"></Image>
        </button>
        <button onClick={props.onAccountClick}>
            <Image width="64" height="64" alt="Account" src="/logo.svg"></Image>
        </button>
        </div>
    )
}

export default Navbar;