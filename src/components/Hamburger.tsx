import Image from "next/image"

interface HamburgerProps {
    show: boolean
}

const Hamburger = (props: HamburgerProps) => {
    return (
        <div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Categorie"></Image>
                <span>Categorie</span>
            </div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Chi siamo"></Image>
                <span>Chi siamo</span>
            </div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Temi"></Image>
                <span>Temi</span>
            </div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Utente"></Image>
                <span>Utente</span>
            </div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Utente"></Image>
                <span>Utente</span>
            </div>
            <div className="flex">
                <Image width={64} height={64} src={"/"} alt="Impostazioni"></Image>
                <span>Impostazioni</span>
            </div>
        </div>
    )    
}

export default Hamburger;