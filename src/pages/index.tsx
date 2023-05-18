import type { NextPage } from "next";
import { useState } from "react";
import Hamburger from "~/components/Hamburger/Hamburger";
import Navbar from "~/components/Navbar";


const Index: NextPage = () => {
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
    </div>
  )
  // TODO: Make this the login.tsx
}

export default Index;