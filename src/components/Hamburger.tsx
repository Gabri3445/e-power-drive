import HamburgerElement from '~/components/HamburgerElement';

interface HamburgerProps {
  show: boolean;
  onGreyAreaClick: () => void;
}

const HamburgerMenu = (props: HamburgerProps) => {
  const handleGrayAreaClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onGreyAreaClick();
    }
  };

  if (props.show) {
    return (
      <div className="bg-[#000]/[0.6] w-screen h-screen" onClick={handleGrayAreaClick}>
        <div className="bg-[#5AA588] w-fit h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] pt-9">
          <HamburgerElement name="Categories" source="/hamburgerIcons/category.svg" onClick={() => {}} />
          <HamburgerElement name="About us" source="/hamburgerIcons/info.svg" onClick={() => {}} />
          <HamburgerElement name="Themes" source="/hamburgerIcons/theme.svg" onClick={() => {}} />
          <HamburgerElement name="User" source="/hamburgerIcons/user.svg" onClick={() => {}} />
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