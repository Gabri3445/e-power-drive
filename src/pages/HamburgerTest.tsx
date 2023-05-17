import { NextPage } from "next";
import Hamburger from "~/components/Hamburger";

const HamburgerTest: NextPage = () => {
  return (
    <>
      <Hamburger show={true}></Hamburger>
    </>
  )
}

export default HamburgerTest;