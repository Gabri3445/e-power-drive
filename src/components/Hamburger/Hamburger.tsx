/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import HamburgerElement from "~/components/Hamburger/HamburgerElement";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useState } from "react";
import Categories from "../Categories";


interface HamburgerProps {
  show: boolean;
  onGreyAreaClick: () => void;
  classname: string
}

const HamburgerMenu = (props: HamburgerProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isCategoryShowing, setIsCategoryShowing] = useState(true);
  const router = useRouter();
  const handleGrayAreaClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.onGreyAreaClick();
    }
  };

  


return (
  <div className={"MainCnt z-10 bg-[#000]/[0.6] w-screen h-screen absolute " + props.classname} onClick={handleGrayAreaClick}>
    <div className={"bg-[#57903C] w-fit h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] pt-9"}>
      {
        isCategoryShowing ? (
          <div>
            <HamburgerElement name="Categories" source="/hamburgerIcons/category.svg" onClick={() => {
            setIsCategoryShowing(false);
          }} />
          <HamburgerElement name="About us" source="/hamburgerIcons/info.svg" onClick={() => {
          }} />
          <HamburgerElement name="Themes" source="/hamburgerIcons/theme.svg" onClick={() => {
          }} />
          <HamburgerElement name="User" source="/hamburgerIcons/user.svg" onClick={() => {
            if (cookies.token !== "undefined" && typeof cookies.token === "string") {
              router.push("/user/" + cookies.token).then(() => window.location.reload()).catch(err => console.log(err));
            }
          }} />
          <HamburgerElement name="Payment methods" source="/hamburgerIcons/wallet.svg" onClick={() => {
          }} />
          <HamburgerElement name="Settings" source="/hamburgerIcons/setting.svg" onClick={() => {
          }} />
          <HamburgerElement name="Logout" source="/hamburgerIcons/exit.svg" onClick={() => {
          }} isLogout={true} />
          </div>
        ) : (
          <div>
            <HamburgerElement name="Go Back" source="/back.png" onClick={() => {
              setIsCategoryShowing(true);
            }}></HamburgerElement>
            <Categories></Categories>
          </div>
        )
      }
    </div>
  </div>
);  
};

export default HamburgerMenu;