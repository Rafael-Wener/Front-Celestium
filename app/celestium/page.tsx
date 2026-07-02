import FooterCeslestium from "./FooterCelestium";
import HeaderCelestium from "./HeaderCelestium";
import NavbarCelestium from "./NavbarCelestium";
import GameModesCelestium from "./GameModes";
import LoginReminderCelestium from "./LoginReminder";
import DiscordReminderCelestium from "./DiscordReminder";

export default function CelestiumPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">      
      <NavbarCelestium />
      <HeaderCelestium />
      <LoginReminderCelestium />
      <GameModesCelestium />
      <DiscordReminderCelestium />
      <FooterCeslestium />
    </div>
  );
}
