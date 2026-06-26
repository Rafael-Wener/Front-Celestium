import { API_BASE_URL } from "../../utils/config";
import {
  transformarProdutoBackend,
  type CategoriaBackendLoja,
  type ProdutoBackendLoja,
  type ProdutoLoja,
} from "./produtosLoja";

export type ItemCarrinhoLoja = {
  produto: ProdutoLoja;
  quantidade: number;
};

export function calcularTotalLoja(carrinho: ItemCarrinhoLoja[]) {
  return carrinho.reduce((total, item) => {
    return total + item.produto.preco * item.quantidade;
  }, 0);
}

export async function buscarProdutosLoja(token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [respostaProdutos, respostaCategorias] = await Promise.all([
    fetch(`${API_BASE_URL}/products`, { headers }),
    fetch(`${API_BASE_URL}/categories`, { headers }),
  ]);

  if (!respostaProdutos.ok) {
    throw new Error("Nao foi possivel carregar os produtos do backend.");
  }

  const produtos = (await respostaProdutos.json()) as ProdutoBackendLoja[];
  const categorias = respostaCategorias.ok
    ? ((await respostaCategorias.json()) as CategoriaBackendLoja[])
    : [];
  const categoriasPorId = new Map(
    categorias.map((categoria) => [categoria.id, categoria.label])
  );

  return produtos
    .filter((produto) => produto.available)
    .map((produto) =>
      transformarProdutoBackend({
        ...produto,
        categoryLabel: categoriasPorId.get(produto.categoryId),
      })
    );
}

export function montarPedidoLoja(carrinho: ItemCarrinhoLoja[], userId: string) {
  return {
    userId,
    items: carrinho.map((item) => ({
      productId: item.produto.id,
      name: item.produto.nome,
      price: item.produto.preco,
      quantity: item.quantidade,
    })),
  };
}

export async function enviarPedidoLoja(carrinho: ItemCarrinhoLoja[], token: string, userId: string) {
  const pedido = montarPedidoLoja(carrinho, userId);

  const resposta = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(pedido),
  });

  const data = await resposta.json();

  if (!resposta.ok) {
    throw new Error(data.message || data.error || "Erro ao finalizar compra");
  }

  return data;
}
