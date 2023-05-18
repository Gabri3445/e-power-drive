import HamburgerElement from '~/components/Hamburger/HamburgerElement';
import { useEffect } from "react";
import { useRouter } from 'next/router';
import {useCookies} from "react-cookie"

interface HamburgerProps {
  show: boolean;
  onGreyAreaClick: () => void;
}

const HamburgerMenu = (props: HamburgerProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"])
  const router = useRouter()
  const handleGrayAreaClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.onGreyAreaClick();
    }
  };

  if (props.show) {
    return (
      <div className="MainCnt z-10 bg-[#000]/[0.6] w-screen h-screen absolute" onClick={handleGrayAreaClick}>
        <div className="bg-[#57903C] w-fit h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] pt-9">
          <HamburgerElement name="Categories" source="/hamburgerIcons/category.svg" onClick={() => {}} />
          <HamburgerElement name="About us" source="/hamburgerIcons/info.svg" onClick={() => {}} />
          <HamburgerElement name="Themes" source="/hamburgerIcons/theme.svg" onClick={() => {}} />
          <HamburgerElement name="User" source="/hamburgerIcons/user.svg" onClick={async () => {
            await router.push("/user/" + cookies.token)
          }} />
          <HamburgerElement name="Payment methods" source="/hamburgerIcons/wallet.svg" onClick={() => {}} />
          <HamburgerElement name="Settings" source="/hamburgerIcons/setting.svg" onClick={() => {}} />
          <HamburgerElement name="Logout" source="/hamburgerIcons/exit.svg" onClick={() => {}} isLogout={true} />
        </div>
      </div>
    );
  }
  return <></>;
};

export default HamburgerMenu;