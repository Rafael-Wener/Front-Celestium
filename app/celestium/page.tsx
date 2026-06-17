import GamesBannerCelestium from "./GamesBanners";
import HeaderCelestium from "./header";
import NavbarCelestium from "./navbar";

export default function CelestiumPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">      
      <NavbarCelestium />
      <HeaderCelestium />
      <GamesBannerCelestium />
      
    </div>
  );
}
