import HamburgerElement from '~/components/HamburgerElement';

interface HamburgerProps {
  show: boolean;
}

const Hamburger = (props: HamburgerProps) => {
      if (props.show) {
        return (
          <div className="bg-[#000]/[0.6] w-screen h-screen">
            <div className="bg-[#5AA588] w-fit h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]">
              <HamburgerElement name="Categories" source="/hamburgerIcons/category.svg" onClick={() => {}} />
              <HamburgerElement name="About us" source="/hamburgerIcons/info.svg" onClick={() => {}} />
              <HamburgerElement name="Themes" source="/hamburgerIcons/theme.svg" onClick={() => {}} />
              <HamburgerElement name="User" source="/hamburgerIcons/user.svg" onClick={() => {}} />
              <HamburgerElement name="Payment methods" source="/hamburgerIcons/wallet.svg" onClick={() => {}} />
              <HamburgerElement name="Settings" source="/hamburgerIcons/setting.svg" onClick={() => {}} />
            </div>
          </div>          
        )
      }
  //TODO log out
};

export default Hamburger;
