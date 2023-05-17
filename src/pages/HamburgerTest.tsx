import { NextPage } from "next";
import { useState } from "react";
import Hamburger from "~/components/Hamburger";
import Navbar from "~/components/Navbar";
import Filters from "~/components/Filters";

const HamburgerTest: NextPage = () => {
  const [show, setShow] = useState(false);

  const onHamburgerChange = () => {
    if (!show) {
      setShow(true)
      return
    }
    setShow(false)
  }

  return (
    <div className="h-screen relative">
      <Navbar onHamburgerClick={onHamburgerChange} onAccountClick={() => {console.log("clicked")}} hamburgerShown={show} setHamburgerShown={setShow}></Navbar>
      <Hamburger show={show} onGreyAreaClick={onHamburgerChange}></Hamburger>
      <Filters/>
    </div>
  )
  //TODO: Make this the index.tsx
}

export default HamburgerTest;