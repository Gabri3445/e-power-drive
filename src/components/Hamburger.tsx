import HamburgerElement from '~/components/HamburgerElement';

interface HamburgerProps {
  show: boolean;
}

const Hamburger = (props: HamburgerProps) => {
  return (
    <div className="bg-[#5AA588] w-fit">
      <HamburgerElement name="Categories" source="/" onClick={() => {}} />
      <HamburgerElement name="About us" source="/" onClick={() => {}} />
      <HamburgerElement name="Themes" source="/" onClick={() => {}} />
      <HamburgerElement name="User" source="/" onClick={() => {}} />
      <HamburgerElement name="Payment methods" source="/" onClick={() => {}} />
      <HamburgerElement name="Settings" source="/" onClick={() => {}} />
    </div>
  );
};

export default Hamburger;
