export default function GamesBannerCelestium() {
    return (
        // BACKGROUND E TELA WRAPPER
        <div className="bg-white flex w-screen p-20 items-start px-40">

            {/* Login page / ESSA PARTE PRECISA DE ATENÇÃO, PRECISA SER ADICIONADO UMA FUNÇÃO QUE CHAME ELA CASO O USUARIA NAO ESTEJA LOGADO */}
            <div className="flex gap-4 bg-[#140b2b] w-screen p-10 rounded-2xl shadow-black shadow-[2px_2px_10px_2px]">

                {/* BORDA DA IMAGEM NÃO AGUENTO MAIS CENTRALIZAR DIVS MDS */}
                <div className="border border-purple-900 rounded-2xl h-16 w-16 flex items-center justify-center bg-[#3B076499] shadow-[0_0_4px_#C084FC]">
                    <img src="/cadeado aberto.png" className="[filter:invert(40%)_sepia(80%)_saturate(500%)_hue-rotate(240deg)] h-10 w-10" alt="cadeado desbloqueado" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-white text-xl">Antes de acessar a loja, faça login ou crie sua conta.</h1>
                    <span className="text-gray-400">É rápido, seguro e você garante acesso a todos os benefícios!</span>
                </div>
            </div>

            {/* DIVISAO DE MODO DE JOGOS */}
            <div className="flex flex-row">
                <div className="text-purple-700 font-bold text-xs">// NOSSOS MODOS DE JOGO</div>
            </div>
        </div>

    )
}