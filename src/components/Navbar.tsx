import Image from "next/image";
import burger from "public/burger.png"
import cross from "public/cross.png"
import Hamburger from "./Hamburger";
import { useState } from "react";

interface NavbarProps {
    onHamburgerClick: () => void
    onAccountClick: () => void
}

const Navbar = (props : NavbarProps) => {
    return (
        <div className="flex bg-[#61B038] items-center h-[73px] justify-between">
        <button onClick={props.onHamburgerClick} className="ml-3.5">
            <Image width="40" height="33" alt="Hamburger" src={burger}></Image>
        </button>
        <button onClick={props.onAccountClick}>
            <Image width="58" height="61" alt="Account" src="/logo.svg" className="mr-3.5"></Image>
        </button>
        </div>
    )
}

export default Navbar;