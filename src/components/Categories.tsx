import HamburgerElement from "./Hamburger/HamburgerElement"
// import bit from "public/services/bit.png"
    import bit from "~/../public/services/bit.png"
    import helbiz from "~/../public/services/helbiz.png"
    import tier from "~/../public/services/tier.png"
    import vaimoo from "~/../public/services/vaimoo.png"
    import pikyrent from "~/../public/services/piky.png"

const Categories = ()=>{
    return (
        <div>
            <HamburgerElement name="Bit Mobility" source={bit.src} onClick={()=>{}}/>
            <HamburgerElement name="Helbiz" source={helbiz.src} onClick={()=>{}}/>
            <HamburgerElement name="Tier" source={tier.src} onClick={()=>{}}/>
            <HamburgerElement name="Vaimoo" source={vaimoo.src} onClick={()=>{}}/>
            <HamburgerElement name="Pikyrent" source={pikyrent.src} onClick={()=>{}}/>
        </div>
    )
}
export default Categories