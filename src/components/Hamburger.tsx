import HamburgerElement from '~/components/HamburgerElement';

interface HamburgerProps {
  show: boolean;
}

const Hamburger = (props: HamburgerProps) => {
  return (
    <div className="bg-[#5AA588] w-fit h-full">
      <HamburgerElement name="Categories" source="/hamburgerIcons/category.svg" onClick={() => {}} />
      <HamburgerElement name="About us" source="/hamburgerIcons/info.svg" onClick={() => {}} />
      <HamburgerElement name="Themes" source="/hamburgerIcons/theme.svg" onClick={() => {}} />
      <HamburgerElement name="User" source="/hamburgerIcons/user.svg" onClick={() => {}} />
      <HamburgerElement name="Payment methods" source="/hamburgerIcons/wallet.svg" onClick={() => {}} />
      <HamburgerElement name="Settings" source="/hamburgerIcons/setting.svg" onClick={() => {}} />
    </div>
  );
  //TODO log out
};

export default Hamburger;
