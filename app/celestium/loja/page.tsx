
import FooterLojaCeslestium from "./FooterLoja";
import HeaderLojaCelestium from "./HeaderLojaClestium";
import NavBarLoja from "./NavbarLoja";
import TabelaDeVendas from "./TabelaDeVendas";

import NavBarLoja from "./Navbar";

import NavBarLoja from "./Navbar";

import NavBarLoja from "./Navbar";

export default function LojaCelestium () {
    return (
        <div className="flex flex-col items-center justify-center font-sans">
            <NavBarLoja />

            <HeaderLojaCelestium />
            <TabelaDeVendas />
            <FooterLojaCeslestium />
        </div>
    )
}
