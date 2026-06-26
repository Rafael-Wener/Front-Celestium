"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  buscarProdutosLoja,
  calcularTotalLoja,
  enviarPedidoLoja,
  type ItemCarrinhoLoja,
} from "./lojaService";
import { categoriasLoja, type ProdutoLoja } from "./produtosLoja";

type CategoriaSelecionada = (typeof categoriasLoja)[number];

const formatarPreco = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function TabelaDeVendas() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<CategoriaSelecionada>("Todos");
  const [produtos, setProdutos] = useState<ProdutoLoja[]>([]);
  const [produtosDoBackend, setProdutosDoBackend] = useState(false);
  const [carregandoProdutos, setCarregandoProdutos] = useState(true);
  const [carrinho, setCarrinho] = useState<ItemCarrinhoLoja[]>([]);
  const [finalizando, setFinalizando] = useState(false);

  useEffect(() => {
    let telaAberta = true;

    async function carregarProdutos() {
      const token = localStorage.getItem("token");

      if (!token) {
        if (telaAberta) setCarregandoProdutos(false);
        return;
      }

      try {
        const produtosBackend = await buscarProdutosLoja(token);

        if (telaAberta) {
          setProdutos(produtosBackend);
          setProdutosDoBackend(true);
        }
      } catch (error) {
        console.log("Nao foi possivel carregar produtos do backend:", error);
      } finally {
        if (telaAberta) setCarregandoProdutos(false);
      }
    }

    void carregarProdutos();

    return () => {
      telaAberta = false;
    };
  }, []);

  const produtosFiltrados = useMemo(() => {
    if (categoriaSelecionada === "Todos") return produtos;

    return produtos.filter((produto) => {
      return produto.categoria === categoriaSelecionada;
    });
  }, [categoriaSelecionada, produtos]);

  const total = calcularTotalLoja(carrinho);
  const quantidadeTotal = carrinho.reduce((totalItens, item) => {
    return totalItens + item.quantidade;
  }, 0);

  function adicionarProduto(produto: ProdutoLoja) {
    setCarrinho((carrinhoAtual) => {
      const produtoJaExiste = carrinhoAtual.find((item) => {
        return item.produto.id === produto.id;
      });

      if (produtoJaExiste) {
        return carrinhoAtual.map((item) => {
          if (item.produto.id === produto.id) {
            return { ...item, quantidade: item.quantidade + 1 };
          }

          return item;
        });
      }

      return [...carrinhoAtual, { produto, quantidade: 1 }];
    });

    toast.success(`${produto.nome} adicionado ao carrinho!`);
  }

  function diminuirProduto(produtoId: string) {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual
        .map((item) => {
          if (item.produto.id === produtoId) {
            return { ...item, quantidade: item.quantidade - 1 };
          }

          return item;
        })
        .filter((item) => item.quantidade > 0);
    });
  }

  function removerProduto(produtoId: string) {
    setCarrinho((carrinhoAtual) => {
      return carrinhoAtual.filter((item) => item.produto.id !== produtoId);
    });
  }

  async function finalizarCompra() {
    if (carrinho.length === 0) {
      toast.error("Adicione algum produto antes de finalizar.");
      return;
    }

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      toast.error("Faca login para finalizar a compra.");
      return;
    }

    if (!produtosDoBackend) {
      toast.error("Ligue o backend e recarregue os produtos antes de finalizar.");
      return;
    }

    try {
      setFinalizando(true);
      await enviarPedidoLoja(carrinho, token, userId);
      setCarrinho([]);
      toast.success("Compra enviada com sucesso!");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao conectar com o backend da loja."
      );
    } finally {
      setFinalizando(false);
    }
  }

  return (
    <div className="w-full bg-white px-6 py-16 text-[#140b2b] md:px-12 xl:px-40">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
            {"// Produtos disponiveis"}
          </div>
          <h2 className="mt-2 text-3xl font-bold text-[#140b2b]">
            Escolha seus beneficios
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Selecione ranks, moedas, kits e extras. Quando o backend estiver
            ligado, os produtos vem direto do banco.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-md border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-bold text-purple-900">
          <img src="/cesta-de-compras.png" alt="" className="h-5 w-5" />
          {quantidadeTotal} item(ns) no carrinho
        </div>
      </div>

      <div className="mb-8 rounded-md border border-purple-100 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-950">
        {carregandoProdutos
          ? "Carregando produtos do backend..."
            : produtosDoBackend
            ? produtos.length > 0
              ? "Produtos carregados do banco do backend."
              : "Banco conectado, aguardando produtos cadastrados."
            : "Faca login para carregar os produtos direto do banco."}
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {categoriasLoja.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSelecionada(categoria)}
            className={`rounded-md border px-4 py-2 text-sm font-bold transition-all duration-300 ${
              categoriaSelecionada === categoria
                ? "border-purple-700 bg-purple-700 text-white"
                : "border-purple-200 bg-white text-purple-900 hover:border-purple-500 hover:bg-purple-50"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_360px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {produtosFiltrados.length === 0 && (
            <div className="rounded-xl border border-purple-100 bg-[#140b2b] p-8 text-white shadow-[0_8px_24px_rgba(20,11,43,0.18)] md:col-span-2 2xl:col-span-3">
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-purple-800 bg-purple-950/60">
                  <img
                    src="/bau-de-tesouro.png"
                    alt=""
                    className="h-8 w-8 invert opacity-70"
                  />
                </div>
                <h3 className="text-xl font-bold">Nenhum produto no banco</h3>
                <p className="mt-2 max-w-md text-sm text-gray-400">
                  Assim que os produtos forem cadastrados no backend, eles vao
                  aparecer aqui automaticamente.
                </p>
              </div>
            </div>
          )}

          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="flex min-h-[390px] flex-col rounded-xl border border-purple-100 bg-[#140b2b] p-5 text-white shadow-[0_8px_24px_rgba(20,11,43,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-400"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-800 bg-purple-950/60">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="h-8 w-8 invert"
                  />
                </div>

                {produto.destaque && (
                  <span className="rounded-md bg-amber-400 px-3 py-1 text-xs font-bold text-[#140b2b]">
                    Mais vendido
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-purple-300">
                  <span>{produto.categoria}</span>
                  <span className="text-purple-700">/</span>
                  <span>{produto.modo}</span>
                </div>

                <h3 className="mt-2 text-2xl font-bold">{produto.nome}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {produto.descricao}
                </p>

                <div className="mt-5 flex flex-col gap-2">
                  {produto.beneficios.map((beneficio) => (
                    <div
                      key={beneficio}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      {beneficio}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-4 flex items-end justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Preco
                    </span>
                    <strong className="text-2xl text-purple-300">
                      {formatarPreco.format(produto.preco)}
                    </strong>
                  </div>

                  <button
                    onClick={() => adicionarProduto(produto)}
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md bg-purple-700 px-4 py-3 font-bold text-white transition-all duration-300 hover:bg-purple-600"
                  >
                    <img
                      src="/cesta-de-compras.png"
                      alt=""
                      className="h-5 w-5 invert"
                    />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl border border-purple-100 bg-[#140b2b] p-5 text-white shadow-[0_8px_24px_rgba(20,11,43,0.18)] xl:sticky xl:top-6">
          <div className="flex items-center justify-between border-b border-purple-900/70 pb-4">
            <div>
              <h3 className="text-xl font-bold">Seu carrinho</h3>
              <p className="mt-1 text-xs text-gray-400">
                Login, produtos e pedidos usam o backend na porta 3005.
              </p>
            </div>
            <img src="/cartao.png" alt="" className="h-8 w-10" />
          </div>

          {carrinho.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-purple-800 bg-purple-950/60">
                <img
                  src="/cesta-de-compras.png"
                  alt=""
                  className="h-8 w-8 invert opacity-70"
                />
              </div>
              <p className="font-bold">Carrinho vazio</p>
              <span className="mt-2 text-sm text-gray-400">
                Adicione um produto para ver o resumo da compra.
              </span>
            </div>
          ) : (
            <div className="mt-5 flex flex-col gap-4">
              {carrinho.map((item) => (
                <div
                  key={item.produto.id}
                  className="rounded-lg border border-purple-900 bg-purple-950/40 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold">{item.produto.nome}</h4>
                      <p className="mt-1 text-xs text-gray-400">
                        {item.produto.categoria} / {item.produto.modo}
                      </p>
                    </div>

                    <button
                      onClick={() => removerProduto(item.produto.id)}
                      className="cursor-pointer text-xs font-bold text-red-300 hover:text-red-200"
                    >
                      Remover
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center overflow-hidden rounded-md border border-purple-800">
                      <button
                        onClick={() => diminuirProduto(item.produto.id)}
                        className="h-8 w-9 cursor-pointer bg-purple-950 font-bold hover:bg-purple-900"
                      >
                        -
                      </button>
                      <span className="flex h-8 w-10 items-center justify-center bg-[#140b2b] text-sm font-bold">
                        {item.quantidade}
                      </span>
                      <button
                        onClick={() => adicionarProduto(item.produto)}
                        className="h-8 w-9 cursor-pointer bg-purple-950 font-bold hover:bg-purple-900"
                      >
                        +
                      </button>
                    </div>

                    <strong className="text-purple-300">
                      {formatarPreco.format(item.produto.preco * item.quantidade)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 border-t border-purple-900/70 pt-5">
            <div className="flex items-center justify-between text-sm text-gray-300">
              <span>Subtotal</span>
              <span>{formatarPreco.format(total)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-purple-300">{formatarPreco.format(total)}</span>
            </div>

            <button
              onClick={finalizarCompra}
              disabled={finalizando}
              className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-purple-700 px-4 py-3 font-bold text-white transition-all duration-300 hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {finalizando ? "Finalizando..." : "Finalizar compra"}
            </button>

            <Link
              href="/login"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-purple-800 px-4 py-3 text-sm font-bold text-purple-200 transition-all duration-300 hover:bg-purple-950"
            >
              Entrar antes de comprar
            </Link>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              Checkout separado em <strong>lojaService.ts</strong>. Ele envia o
              pedido para <strong>/orders</strong> usando o usuario logado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
