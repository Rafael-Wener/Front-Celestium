"use client";

import { useEffect, useState } from "react";

export default function LoginReminderCelestium() {
    
    // PARTE PARA VERIFICAR SE ESTA LOGADO, SE CASO ESTEJA LOGADO A PARTE DO LOGIN REMINDER DESAPAREÇERA!
    const [logado, setLogado] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setLogado(true);
    }, []); 

    if (logado) return null;

    return (
        // BACKGROUND E TELA WRAPPER
        <div className="bg-white flex flex-col w-full items-start px-40">

            {/* Login page / ESSA PARTE PRECISA DE ATENÇÃO, PRECISA SER ADICIONADO UMA FUNÇÃO QUE CHAME ELA CASO O USUARIA NAO ESTEJA LOGADO */}
            <div className="flex gap-4 bg-[#140b2b] w-full p-10 rounded-2xl shadow-black shadow-[2px_2px_10px_2px] mt-15 items-center justify-center">
                {/* BORDA DA IMAGEM NÃO AGUENTO MAIS CENTRALIZAR DIVS MDS */}
                {/* LEMBRETE DE LOGIN */}
                <div className="border border-purple-900 rounded-2xl h-16 w-16 flex items-center justify-center bg-[#3B076499] shadow-[0_0_4px_#C084FC]">
                    <img src="/cadeado aberto.png" className="[filter:invert(40%)_sepia(80%)_saturate(500%)_hue-rotate(240deg)] h-10 w-10" alt="cadeado desbloqueado" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-white text-xl">Antes de acessar a loja, faça login ou crie sua conta.</h1>
                    <span className="text-gray-400">É rápido, seguro e você garante acesso a todos os benefícios!</span>
                </div>

                {/* BOTAO DE LOGAR NO CONTAINER */}
                <button className="flex flex-row items-center justify-center ml-90 bg-purple-700 rounded-md h-10 w-47 hover:bg-purple-600 transition-all hover:scale-105 cursor-pointer duration-500">
                    <img src="/usuario.png" alt="icone de usuario" className="h-4 w-4 invert m-2 font-bold" />
                    <a href="/login" className="flex font-bold">Entrar na conta</a>
                </button>

                {/* BOTAO DE CADASTRAR NO CONTAINER */}
                <button className="flex flex-row items-center justify-center bg-purple-950/40 rounded-md h-10 w-47 border border-purple-900 hover:bg-purple-800/40 hover:border-purple-800 transition-all hover:scale-105 cursor-pointer duration-500">
                    <img src="/adicionar-usuario.png" alt="icone de cadastrar usuario" className="h-5 w-5 invert m-2" />
                    <a href="/cadastro" className="font-bold font-sans">Criar cadastro</a>
                </button>
            </div>
        </div>
    )
}