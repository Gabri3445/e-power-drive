import { NextPage } from "next";
import Hamburger from "~/components/Hamburger";
import Navbar from "~/components/Navbar";

const HamburgerTest: NextPage = () => {
  return (
    <div className="h-screen">
      <Navbar onHamburgerClick={() => {console.log("clicked")}} onAccountClick={() => {console.log("clicked")}}></Navbar>
      <Hamburger show={true}></Hamburger>
    </div>
  )
}

export default HamburgerTest;