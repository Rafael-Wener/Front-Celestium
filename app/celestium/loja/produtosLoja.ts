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

export const produtosLoja: ProdutoLoja[] = [
  {
    id: "local-vip-astral",
    nome: "VIP Astral",
    categoria: "Vips",
    modo: "Survival",
    preco: 19.9,
    destaque: true,
    imagem: "/coroa.png",
    descricao: "Beneficios para comecar melhor no Survival.",
    beneficios: ["Tag exclusiva", "Kit semanal", "Homes extras"],
  },
  {
    id: "local-vip-celestial",
    nome: "VIP Celestial",
    categoria: "Vips",
    modo: "BoxPVP",
    preco: 34.9,
    destaque: true,
    imagem: "/coroa.png",
    descricao: "Mais destaque e vantagens dentro do BoxPVP.",
    beneficios: ["Tag no chat", "Kit especial", "Bonus de coins"],
  },
  {
    id: "local-1000-celestiuns",
    nome: "1.000 Celestiuns",
    categoria: "Moedas",
    modo: "RankUP",
    preco: 9.9,
    imagem: "/cifrao.png",
    descricao: "Pacote rapido de moedas para usar no servidor.",
    beneficios: ["Entrega automatica", "Saldo no servidor", "Uso livre"],
  },
  {
    id: "local-5000-celestiuns",
    nome: "5.000 Celestiuns",
    categoria: "Moedas",
    modo: "SMP",
    preco: 39.9,
    destaque: true,
    imagem: "/cifrao.png",
    descricao: "Pacote maior para quem joga com frequencia.",
    beneficios: ["Melhor custo", "Entrega automatica", "Bonus incluso"],
  },
  {
    id: "local-kit-minerador",
    nome: "Kit Minerador",
    categoria: "Kits",
    modo: "Survival",
    preco: 14.9,
    imagem: "/pacote.png",
    descricao: "Itens para ajudar na mineracao e no comeco da jornada.",
    beneficios: ["Picareta melhorada", "Tochas", "Comidas"],
  },
  {
    id: "local-kit-guerreiro",
    nome: "Kit Guerreiro",
    categoria: "Kits",
    modo: "BoxPVP",
    preco: 17.9,
    imagem: "/espadas.png",
    descricao: "Equipamentos para entrar mais forte no combate.",
    beneficios: ["Armadura inicial", "Espada", "Pocoes"],
  },
  {
    id: "local-unban",
    nome: "UnBan",
    categoria: "UnBan",
    modo: "Survival",
    preco: 24.9,
    imagem: "/escudo.png",
    descricao: "Recupere o acesso seguindo as regras do servidor.",
    beneficios: ["Analise rapida", "Retorno ao servidor", "Suporte no Discord"],
  },
  {
    id: "local-chave-misteriosa",
    nome: "Chave Misteriosa",
    categoria: "Extras",
    modo: "SMP",
    preco: 7.9,
    imagem: "/bau-de-tesouro.png",
    descricao: "Abra recompensas especiais dentro do modo SMP.",
    beneficios: ["Chance de itens raros", "Entrega no jogo", "Uso imediato"],
  },
];

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
