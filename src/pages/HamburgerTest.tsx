import { NextPage } from "next";
import { useState } from "react";
import Hamburger from "~/components/Hamburger";
import Navbar from "~/components/Navbar";
import Filters from "~/components/Filters";

const HamburgerTest: NextPage = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="h-screen relative">
      <Navbar onHamburgerClick={() => {
        if (!show) {
          setShow(true)
          return
        }
        setShow(false)
      }} onAccountClick={() => {console.log("clicked")}}></Navbar>

      <Hamburger show={show}></Hamburger>
      <Filters/>
    </div>
  )
}

export default HamburgerTest;