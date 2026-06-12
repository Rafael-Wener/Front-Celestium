import HeaderCelestium from "./header";
import NavbarCelestium from "./navbar";

export default function CelestiumPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">      
    <NavbarCelestium />
    <HeaderCelestium />

    </div>
  );
}
