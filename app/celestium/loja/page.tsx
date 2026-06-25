import FooterLojaCeslestium from "./FooterLoja";
import HeaderLojaCelestium from "./HeaderLojaClestium";
import NavBarLoja from "./NavbarLoja";

export default function LojaCelestium () {
    return (
        <div className="flex flex-col items-center justify-center font-sans">
            <NavBarLoja />
            <HeaderLojaCelestium />
            <FooterLojaCeslestium />
        </div>
    )
}