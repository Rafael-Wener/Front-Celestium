export type CategoriaLoja = "Vips" | "Moedas" | "Kits" | "UnBan" | "Extras";

export type ModoLoja = "Survival" | "SMP" | "RankUP" | "BoxPVP" | "Geral";

export type ProdutoLoja = {
  id: string;
  nome: string;
  categoria: CategoriaLoja;
  modo: ModoLoja;
  preco: number;
  destaque?: boolean;
  imagem: string;
  descricao: string;
  beneficios: string[];
};

export type ProdutoBackendLoja = {
  id: string;
  name: string;
  categoryId: string;
  categoryLabel?: string;
  description: string;
  price: number;
  image: string;
  badge?: string | null;
  available: boolean;
  tag?: string | null;
  rating: number;
};

export type CategoriaBackendLoja = {
  id: string;
  label: string;
  icon?: string;
};

export const categoriasLoja = [
  "Todos",
  "Vips",
  "Moedas",
  "Kits",
  "UnBan",
  "Extras",
] as const;

function categoriaDoBackend(categoryId: string, categoryLabel?: string): CategoriaLoja {
  const categoria = (categoryLabel || categoryId).toLowerCase();

  if (categoria === "vip" || categoria === "vips") return "Vips";
  if (categoria === "celestiuns" || categoria === "moedas") return "Moedas";
  if (categoria === "kit" || categoria === "kits") return "Kits";
  if (categoria === "unban") return "UnBan";
  if (categoria === "chaves" || categoria === "outros") return "Extras";

  return "Extras";
}

function iconeDaCategoria(categoria: CategoriaLoja) {
  if (categoria === "Vips") return "/coroa.png";
  if (categoria === "Moedas") return "/cifrao.png";
  if (categoria === "Kits") return "/pacote.png";
  if (categoria === "UnBan") return "/escudo.png";

  return "/bau-de-tesouro.png";
}

export function transformarProdutoBackend(produto: ProdutoBackendLoja): ProdutoLoja {
  const categoria = categoriaDoBackend(produto.categoryId, produto.categoryLabel);
  const selo = produto.badge || produto.tag;

  return {
    id: produto.id,
    nome: produto.name,
    categoria,
    modo: "Geral",
    preco: produto.price,
    destaque: Boolean(selo?.toLowerCase().includes("mais")),
    imagem: produto.image || iconeDaCategoria(categoria),
    descricao: produto.description,
    beneficios: [
      "Entrega na conta logada",
      selo || "Produto oficial",
      produto.available ? "Disponivel para compra" : "Indisponivel",
    ],
  };
}
