"use client";

import { useState } from "react";

export default function GameModesCelestium() {
    const [aberto, setAberto] = useState<string | null>(null);

    function AbrirTabela(modo: string) {
        setAberto(aberto === modo ? null : modo);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full py-16 bg-white">
            <div className="flex flex-col justify-center items-center w-full">
                <div className="text-purple-700 font-bold text-xs">// NOSSOS MODOS DE JOGO</div>
            </div>

            <div className="grid grid-cols-4 gap-10 py-16 w-full px-40">

                {/* SURVIVAL */}
                <div className="flex flex-col">
                    <button onClick={() => AbrirTabela("survival")} className="border-t-4 border-t-emerald-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl hover:scale-110 duration-400 transition-all cursor-pointer">
                        <div className="flex flex-row items-center justify-center gap-6">
                            <img src="/arvore-de-natal.png" alt="icone de arvore" className="h-4 w-4 [filter:invert(72%)_sepia(50%)_saturate(500%)_hue-rotate(110deg)]" />
                            <h2 className="font-bold">Survival</h2>
                        </div>
                        <h3 className="flex items-center justify-center text-xs text-gray-400">Sobreviva, construa e conquiste.</h3>
                        <div className="flex items-center justify-center mt-2">
                            <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta" className={`h-4 w-4 invert transition-transform duration-300 ${aberto === "survival" ? "rotate-180" : ""}`} />
                        </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${aberto === "survival" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-[#140b2b] rounded-xl p-4 text-sm text-gray-300 flex flex-col gap-2">
                            <h3 className="font-bold">Vips</h3>
                            <p>Benefícios incríveis para destacar sua jornada</p>
                            <h3 className="font-bold">Celestiuns</h3>
                            <p>Moeda exclusiva do servidor para diversas utilidades</p>
                            <h3 className="font-bold">Outros</h3>
                            <p>Itens extras e melhorias para sua experiência</p>
                            <h3 className="font-bold">UnBan</h3>
                            <p>Recupere seu acesso e volte a jogar sem complicações</p>
                        </div>
                    </div>
                </div>

                {/* SMP */}
                <div className="flex flex-col">
                    <button onClick={() => AbrirTabela("smp")} className="border-t-4 border-t-blue-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl hover:scale-110 duration-400 transition-all cursor-pointer">
                        <div className="flex flex-row items-center justify-center gap-6">
                            <img src="/no-mundo-todo.png" alt="icone de mundo" className="h-4 w-4 [filter:invert(42%)_sepia(90%)_saturate(500%)_hue-rotate(190deg)]" />
                            <h2 className="font-bold">SMP</h2>
                        </div>
                        <h3 className="flex items-center justify-center text-xs text-gray-400">Evolua, upar e seja o melhor.</h3>
                        <div className="flex items-center justify-center mt-2">
                            <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta" className={`h-4 w-4 invert transition-transform duration-300 ${aberto === "smp" ? "rotate-180" : ""}`} />
                        </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${aberto === "smp" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-[#140b2b] rounded-xl p-4 text-sm text-gray-300 flex flex-col gap-2">
                            <h3 className="font-bold">Vips</h3>
                            <p>Benefícios incríveis para destacar sua jornada</p>
                        </div>
                    </div>
                </div>

                {/* RANKUP */}
                <div className="flex flex-col">
                    <button onClick={() => AbrirTabela("rankup")} className="border-t-4 border-t-amber-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl hover:scale-110 duration-400 transition-all cursor-pointer">
                        <div className="flex flex-row items-center justify-center gap-6">
                            <img src="/setas-para-cima.png" alt="icone de Levelup" className="h-4 w-4 [filter:invert(80%)_sepia(80%)_saturate(500%)_hue-rotate(10deg)]" />
                            <h2 className="font-bold">RankUP</h2>
                        </div>
                        <h3 className="flex items-center justify-center text-xs text-gray-400">Evolua, upar e seja o melhor.</h3>
                        <div className="flex items-center justify-center mt-2">
                            <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta" className={`h-4 w-4 invert transition-transform duration-300 ${aberto === "rankup" ? "rotate-180" : ""}`} />
                        </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${aberto === "rankup" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-[#140b2b] rounded-xl p-4 text-sm text-gray-300 flex flex-col gap-2">
                            <h3 className="font-bold">Ranks</h3>
                            <p>Evolua seus status e ganhe beneficios exclusivos</p>
                            <h3 className="font-bold">KITs</h3>
                            <p>Kits especiais para te ajudar na sua jornada</p>
                            <h3 className="font-bold">Celestiuns"</h3>
                            <p>Moeda exlusiva do servidor para diversas utilidades</p>
                            <h3 className="font-bold">Outros</h3>
                            <p>Itens extras e melhorias para sua experiencia</p>
                            <h3 className="font-bold">UnBan</h3>
                            <p>Recupere seu acesso e voltea jogar sem complicações</p>
                        </div>
                    </div>
                </div>

                {/* BOXPVP */}
                <div className="flex flex-col">
                    <button onClick={() => AbrirTabela("boxpvp")} className="border-t-4 border-t-rose-500 bg-[#140b2b] items-center justify-center p-4 text-xl font-sans rounded-xl hover:scale-110 duration-400 transition-all cursor-pointer">
                        <div className="flex flex-row items-center justify-center gap-6">
                            <img src="/espadas.png" alt="icone de espada" className="h-4 w-4 [filter:invert(40%)_sepia(80%)_saturate(500%)_hue-rotate(320deg)]" />
                            <h2 className="font-bold">BoxPVP</h2>
                        </div>
                        <h3 className="flex items-center justify-center text-xs text-gray-400">PvP rápido, justo e intenso.</h3>
                        <div className="flex items-center justify-center mt-2">
                            <img src="/sinal-de-seta-para-baixo-para-navegar.png" alt="seta" className={`h-4 w-4 invert transition-transform duration-300 ${aberto === "boxpvp" ? "rotate-180" : ""}`} />
                        </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${aberto === "boxpvp" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                        <div className="bg-[#140b2b] rounded-xl p-4 text-sm text-gray-300 flex flex-col gap-2">
                            <h3 className="font-bold">Vips</h3>
                            <p>Benefícios incríveis para destacar sua jornada</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}