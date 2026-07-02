import Link from "next/link";
<<<<<<< HEAD:app/celestium/loja/NavbarLoja.tsx
import { toast } from "sonner";
import {
  avisarMudancaLocalStorage,
  useLocalStorageItem,
} from "../../utils/useLocalStorageItem";

export default function NavbarCelestium() {
  const nickname = useLocalStorageItem("nickname");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("nickname");
    avisarMudancaLocalStorage();
    toast.success("Você saiu da conta!");
  }
=======
>>>>>>> parent of a48d3a5 (nit fix necessary):app/celestium/loja/Navbar.tsx

export default function NavBarLoja() {
  return (
    // TELA BACKGROUND 
    <div className="bg-gray-950 w-full h-22 flex items-center justify-between px-40">
      {/* PARTE DO LOGO */}
      <div className="flex items-center justify-center gap">
        <img src="/logoCeslestiumtrue.png" alt="Logo Celestium" className="h-12 w-12 rounded-md mr-4" />
        <span className="text-white text-lg font-bold">Celestium</span> <span className="text-purple-500 text-lg font-bold">MC</span>
      </div>

      {/* PARTE DO MENU */}
      <div className="flex items-center gap-6 justify-center font-bold">
        <a href="/celestium" className="text-white text-sm border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Voltar</a>
        <a href="#" className="text-white text-sm border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Ínicio</a>
        <a href="#" className="text-white text-sm border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">VIPS</a>
        <a href="#" className="text-white text-sm border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Pacotes</a>
        <a href="#" className="text-white text-sm border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Suporte</a>
      </div>

      {/* PARTE DO LOGIN */}
      {/* TELA WRAPPER */}
      <div className="flex justify-center items-center gap-1">

        {/* BOTAO DE LOGAR */}
        <button className="flex items-center justify-center cursor-pointer group">
          <div className="flex items-center justify-center">
            <img src="/usuario.png" alt="User Icon" className="w-4 h-4 invert opacity-60 group-hover:opacity-100 transition-all duration-300" />
            <Link href="/login">
              <span className="text-gray-400 text-sm font-bold rounded-md px-4 py-1 transition-colors duration-300 group-hover:text-white">Entrar</span>
            </Link>
          </div>
        </button>

        {/* BOTAO DE CADASTRO */}
        <button className="flex cursor-pointer text-white text-sm font-bold rounded-md px-4 py-2 bg-purple-500 transition-colors duration-400 hover:bg-purple-600">
          <Link href="/cadastro">
            <span className="">Cadastrar</span>
          </Link>
        </button>

        {/* BOTAO DO DISCORD */}
        <button className="cursor-pointer flex">
          <Link href="https://discord.gg/MF2m9DE8s">
            <div className="text-white text-sm font-bold rounded-md px-4 py-2 bg-blue-500 transition-colors duration-400 ml-2 flex-row flex hover:bg-blue-600">
              <img src="/Discord.png" alt="" className="w-5 h-5 invert mr-2 flex justify-center items-center" />
              <span className="">Discord</span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
}
