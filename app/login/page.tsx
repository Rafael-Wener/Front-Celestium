"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  async function handleLogin() {
    if (!email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }

    const res = await fetch("http://10.200.80.81:3005/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/celestium");
    } else {
      setErro(data.message || "Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gradient-to-t from-purple-950/70 to-purple-950/10">
      <div className="border-2 justify-center items-center shadow shadow-purple-950 flex flex-col bg-zinc-900/50 border-gray-800 h-130 w-110 rounded-xl">
        <h1 className="font-bold text-2xl">Entrar</h1>
        <div className="text-purple-200/60">Faça login para acessar a loja</div>

        <div className="pt-6 w-full px-8">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2>Email</h2>
            <input
              className="p-2 bg-gray-900 border border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none text-purple-200"
              placeholder="Digite seu @email.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h2 className="pt-6">Senha</h2>
            <input
              className="p-2 bg-gray-900 border border-gray-800 rounded-xl w-full hover:border-purple-500/60 focus:border-purple-500/60 focus:outline-none text-purple-200"
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        {erro && <p className="text-red-400 text-xs mt-4">{erro}</p>}

        <div className="pt-6 w-full px-8">
          <button
            onClick={handleLogin}
            className="px-4 bg-purple-700 font-bold py-2 rounded-xl w-full hover:scale-102 duration-300 cursor-pointer">
            Entrar
          </button>
        </div>

        <div className="pt-6 w-full px-8 items-center justify-center flex">
          <a href="/cadastro" className="text-purple-500/60 hover:text-purple-300 duration-300">
            Não tem conta? Se cadastre aqui
          </a>
        </div>
      </div>
    </div>
  );
}