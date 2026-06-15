export default function NavbarCelestium() {
  return (
    // TELA BACKGROUND 
    <div className="bg-gray-950 w-screen h-22 flex items-center justify-between px-40">
      {/* PARTE DO LOGO */}
      <div className="flex items-center justify-center gap">
        <span className="text-white text-lg font-bold">Celestium</span> <span className="text-purple-500 text-lg font-bold">MC</span>
      </div>

      {/* PARTE DO MENU */}
      <div className="flex items-center gap-6 justify-center">
        <a href="#" className="text-white text-sm font-medium border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Ínicio</a>
        <a href="#" className="text-white text-sm font-medium border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Loja</a>
        <a href="#" className="text-white text-sm font-medium border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Moedas</a>
        <a href="#" className="text-white text-sm font-medium border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Discord</a>
        <a href="#" className="text-white text-sm font-medium border-b-2 border-transparent hover:border-b-purple-500 transition-colors duration-300">Suporte</a>
      </div>

      {/* PARTE DO LOGIN */}
      <div className="flex items-center justify-center px-8">
        <img src="/usuario.png" alt="User Icon" className="w-4 h-4 invert" />
        <button className="text-gray-300 text-sm font-bold rounded-md px-4 py-1 transition-colors duration-400 hover:text-white">Entrar</button>
        <button className="text-white text-sm font-bold rounded-md px-4 py-2 bg-purple-500 transition-colors duration-300">Cadastrar</button>

        <div className="text-white text-sm font-bold rounded-md px-4 py-2 bg-blue-500 transition-colors duration-300 ml-2 flex-row flex">
          <img src="/Discord.png" alt="" className="w-5 h-5 invert mr-2 flex justify-center items-center" />
          <button className="">Discord</button>
        </div>
      </div>
    </div>
  );
}
