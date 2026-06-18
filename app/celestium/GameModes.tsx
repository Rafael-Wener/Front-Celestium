export default function GameModesCelestium() {
    return (
        // TELA WRAPPER E BACKGROUND
        <div className="flex flex-col justify-center items-center w-full py-16 bg-white">
            {/* DIVISAO DE MODO DE JOGOS */}
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-purple-700 font-bold text-xs">// NOSSOS MODOS DE JOGO</div>
            </div>

            {/* BOTOES DE MODOS DE JOGOS TELA WRAPPER */}
            <div className="flex gap-40 py-16">
                {/* SURVIVAL */}
                <button className="border-t-4 border-t-emerald-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl w-60 hover:scale-110 duration-400 transition-all cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-6">
                        <img src="/arvore-de-natal.png" alt="icone de arvore" className="h-4 w-4 items-start justify-start flex [filter:invert(72%)_sepia(50%)_saturate(500%)_hue-rotate(110deg)]" />
                        <h2 className="font-bold">Survival</h2>
                    </div>
                    <h3 className="flex items-center justify-center text-xs text-gray-400">Sobreviva, construa e conquiste.</h3>
                    <div className="flex items-center justify-center mt-2">
                        <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta de mais" className="h-4 w-4 invert flex"/>
                    </div>
                </button>

                {/* SMP */}
                <button className="border-t-4 border-t-blue-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl w-60 hover:scale-110 duration-400 transition-all cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-6">
                        <img src="/no-mundo-todo.png" alt="icone de mundo" className="h-4 w-4 items-start justify-start flex filter-[invert(42%)_sepia(90%)_saturate(500%)_hue-rotate(190deg)]" />
                        <h2 className="font-bold">SMP</h2>
                    </div>
                    <h3 className="flex items-center justify-center text-xs text-gray-400">Evolua, upar e seja o melhor.</h3>
                    <div className="flex items-center justify-center mt-2">
                        <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta de mais" className="h-4 w-4 invert flex"/>
                    </div>
                </button>

                {/* RANKUP */}
                <button className="border-t-4 border-t-amber-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl w-60 hover:scale-110 duration-400 transition-all cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-6">
                        <img src="/setas-para-cima.png" alt="icone de Levelup" className="h-4 w-4 items-start justify-start flex filter-[invert(80%)_sepia(80%)_saturate(500%)_hue-rotate(10deg)]" />
                        <h2 className="font-bold">RankUP</h2>
                    </div>
                    <h3 className="flex items-center justify-center text-xs text-gray-400">Evolua, upar e seja o melhor.</h3>
                    <div className="flex items-center justify-center mt-2">
                        <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta de mais" className="h-4 w-4 invert flex"/>
                    </div>
                </button>

                {/* BOXPVP  */}
                <button className="border-t-4 border-t-rose-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl w-60 hover:scale-110 duration-400 transition-all cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-6">
                        <img src="/espadas.png" alt="icone de espada" className="h-4 w-4 items-start justify-start flex filter-[invert(40%)_sepia(80%)_saturate(500%)_hue-rotate(320deg)]" />
                        <h2 className="font-bold">BoxPVP</h2>
                    </div>
                    <h3 className="flex items-center justify-center text-xs text-gray-400">PvP rápido, justo e intenso.</h3>
                    <div className="flex items-center justify-center mt-2">
                        <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta de mais" className="h-4 w-4 invert flex"/>
                    </div>
                </button>
            </div>
        </div>
    )
}