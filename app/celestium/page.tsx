import DiscordCelestium from "./DiscordBanners";
import FooterCeslestium from "./FooterCelestium";
import GamesBannerCelestium from "./gamesBanners";
import HeaderCelestium from "./HeaderCelestium";
import NavbarCelestium from "./NavbarCelestium";

export default function CelestiumPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">      
      <NavbarCelestium />
      <HeaderCelestium />
      <GamesBannerCelestium />
      <DiscordCelestium />
      <FooterCeslestium />
    </div>
  );
}
