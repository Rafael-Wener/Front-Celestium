"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";



export default function RegisterPage() {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  async function handleRegister() {
    if (!nick || !email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    const res = await fetch("http://10.200.80.81:3005/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nick, email, senha }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setErro(data.message || "Erro ao criar conta!")
    }
  }


  return (
    // TELA WRAPPER + BACKGROUND CONFIG
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-t from-purple-950/70 to-purple-950/10">
      {/* PAINEL ONDE FICA O LOGIN */}
      <div className="border-2 justify-center items-center shadow shadow-purple-950 flex flex-col bg-zinc-900/50 border-gray-800 h-130 w-110 rounded-xl">
        {/* TEXTO DE MEETING */}
        <h1 className="font-bold text-2xl">Criar Conta</h1>
        <div className="text-purple-200/60">
          Cadastre-se para acessar a loja
        </div>

        {/* USO DO FORM PARA PEGAR AS INFORMAÇÕES (PRECISA COLOCAR METHOD: POST) */}
        <form action="/login" method="POST" className="pt-6 w-full px-8">
          {/* WRAPPER DO EMAIL, SENHA & NICK PARA COLOCAR NO START */}
          <div className="flex flex-col justify-start items-start gap-2">

            {/* NICK DO MINECRAFT */}
            <h2 className="">Nick do Minecraft</h2>
            <input
              className="p-2 bg-gray-900 border font-extralight border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none text-purple-200"
              placeholder="SeuNick1234"
              type="text"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
            />

            {/* EMAIL */}
            <h2 className="pt-2">Email</h2>
            <input
              className="p-2 bg-gray-900 border font-extralight border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none text-purple-200"
              placeholder="Digite seu @email.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* SENHA */}
            <h2 className="pt-6">Senha</h2>
            <input
              className="p-2 bg-gray-900 border border-gray-800 font-light rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none text-purple-200"
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </form>

        {erro && <p className="text-red-400 text-xs mt-4">{erro}</p>}

        {/* BOTÃO DE LOGIN */}
        <div className="pt-6 w-full px-8">
          <button
            onClick={handleRegister}
            className="px-4 bg-purple-700 font-bold py-2 rounded-xl w-full hover:scale-102 duration-300 cursor-pointer">
            Criar Conta
          </button>
        </div>

        

        {/* LINK DE ESQUECEU SUA SENHA PRECISA SER COLOCADO E CRIADO PAGINA DE CRIAR SENHA */}
        <div className="pt-6 w-full px-8 items-center justify-center flex">
          <a href="/login" className="text-purple-500/60 hover:text-purple-300 hover:scale-102 duration-300 cursor-pointer">
            Já tem conta? Faça login aqui
          </a>
        </div>
      </div>
    </div>
  );
}
