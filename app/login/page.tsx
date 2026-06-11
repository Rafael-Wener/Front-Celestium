export default function LoginPage() {
  return (
    // TELA WRAPPER + BACKGROUND CONFIG
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-t from-purple-950/70 to-purple-950/10">
      {/* PAINEL ONDE FICA O LOGIN */}
      <div className="border-2 justify-center items-center shadow shadow-purple-950 flex flex-col bg-zinc-900/50 border-gray-800 h-130 w-110 rounded-xl">
        {/* TEXTO DE MEETING */}
        <h1 className="font-bold text-2xl">Entrar</h1>
        <div className="text-purple-200/60">
          Faça login para acessar a loja
        </div>

        {/* USO DO FORM PARA PEGAR AS INFORMAÇÕES (PRECISA COLOCAR METHOD: POST) */}
        <form action="/login" method="POST" className="pt-6 w-full px-8">
          {/* WRAPPER DO EMAIL E SENHA PARA COLOCAR NO START */}
          <div className="flex flex-col justify-start items-start gap-2">
            {/* EMAIL */}
            <h2 className="font-bold">Email</h2>
            <input
              className="p-2 bg-gray-900 border border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none"
              placeholder="Digite seu @email.com"
              type="text"
            />

            {/* SENHA */}
            <h2 className="font-bold pt-6">Senha</h2>
            <input
              className="p-2 bg-gray-900 border border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none"
              placeholder="Digite sua senha"
              type="password"
            />
          </div>
        </form>
        {/* BOTÃO DE LOGIN */}
        <div className="pt-6 w-full px-8">
          <button 
          className="px-4 bg-purple-700 font-bold py-2 rounded-xl w-full hover:scale-102 duration-300">
            Entrar
          </button>
        </div>

        {/* LINK DE ESQUECEU SUA SENHA PRECISA SER COLOCADO E CRIADO PAGINA DE CRIAR SENHA */}
        <div className="pt-6 w-full px-8 items-center justify-center flex">
          <a href="/cadastro" className="text-purple-500/60 hover:text-purple-300 hover:scale-102 duration-300">
            Não tem conta? Se cadastre aqui
          </a>
        </div>
      </div>
    </div>
  );
}
