/**
 * Índice estático exclusivamente visual, extraído dos documentos oficiais
 * "00 - Ordem Oficial dos Módulos" e "01 - Descrição dos Módulos".
 * NÃO é fonte de verdade para avaliações, acesso comercial ou progresso.
 */
const titles: Record<string, string> = {
  A1: "Produtos Notáveis e Fatoração",
  A2: "Potenciação e Radiciação",
  A3: "Razão, Proporção e Regra de Três",
  A4: "Porcentagem e Juros",
  A5: "Teoria dos Conjuntos",
  "A6-10": "Conjuntos Numéricos",
  "A6-11": "Múltiplos e Divisores",
  A7: "Funções",
  A8: "Equações e Funções do 1º Grau",
  "A9-15": "Equações do 2º Grau",
  "A9-16": "Funções do 2º Grau",
  A10: "Inequações Produto-quociente",
  A11: "Módulo e Função Modular",
  A12: "Função Inversa e Função Composta",
  A13: "Equação, Inequação e Função Exponencial",
  "A14-24": "Logaritmos",
  "A14-25": "Função Logarítmica",
  A15: "P.A. e P.G.",
  A16: "Matrizes e Determinantes",
  A17: "Sistemas Lineares",
  A18: "Fatorial e Binômio de Newton",
  A19: "Análise Combinatória",
  A20: "Probabilidade",
  A21: "Números Complexos",
  A22: "Polinômios e Equações Algébricas",
  GP1: "Ângulos, Paralelismo e Triângulos",
  GP2: "Pontos Notáveis de um Triângulo",
  GP3: "Quadriláteros",
  GP4: "Ângulos na Circunferência",
  GP5: "Polígonos",
  GP6: "Teorema de Tales e Semelhança de Triângulos",
  GP7: "Relações Métricas no Triângulo Retângulo",
  GP8: "Relações Métricas da Circunferência",
  GP9: "Áreas de Figuras Planas",
  GP10: "Áreas Circulares",
  T1: "Trigonometria no Triângulo Retângulo",
  T2: "Identidades Trigonométricas",
  T3: "Medidas de Arcos e Ângulos",
  T4: "Circunferência Trigonométrica",
  T5: "Lei dos Senos e dos Cossenos",
  T6: "Soma e Diferença de Arcos e Arco Duplo",
  T7: "Equações e Inequações Trigonométricas",
  T8: "Funções Trigonométricas",
  GE1: "Geometria de Posição",
  GE2: "Poliedros",
  GE3: "Prismas",
  GE4: "Paralelepípedos e Cubos",
  GE5: "Pirâmides",
  GE6: "Tetraedro Regular",
  GE7: "Cilindros",
  GE8: "Cones",
  GE9: "Esferas",
  GE10: "Estudo dos Troncos",
  GE11: "Inscrição e Circunscrição de Sólidos",
  GA1: "Introdução à Geometria Analítica, Distância e Ponto Médio",
  GA2: "Alinhamento de Pontos e Área de Polígonos",
  GA3: "Estudo da Reta",
  GA4: "Estudo da Circunferência",
  GA5: "Distância de Ponto à Reta",
  GA6: "Desigualdades",
  GA7: "Estudo das Cônicas",
  E1: "Noções de Estatística Básica para ENEM",
};

// 62 posições na ordem oficial. A6, A9 e A14 são desdobrados em duas etapas.
const order = [
  "A1", "GP1", "A2", "T1", "GP2", "A3", "T2", "A4", "GP3", "A5",
  "T3", "A6-10", "GP4", "A6-11", "T4", "A7", "GP5", "A8", "T5", "A9-15",
  "GP6", "A9-16", "T6", "A10", "GP7", "A11", "T7", "A12", "GP8", "A13",
  "T8", "A14-24", "GP9", "A14-25", "GP10", "A15", "GE1", "A16", "GA1", "A17",
  "GE2", "A18", "GA2", "A19", "GE3", "A20", "GA3", "A21", "GE4", "A22",
  "GA4", "GE5", "GA5", "GE6", "GA6", "GE7", "GA7", "GE8", "GE9", "GE10",
  "GE11", "E1",
] as const;

export const curriculum = order.map((id, i) => {
  const code = id.split("-")[0];
  const area = code.startsWith("GP") ? "Geometria Plana"
    : code.startsWith("GE") ? "Geometria Espacial"
    : code.startsWith("GA") ? "Geometria Analítica"
    : code.startsWith("T") ? "Trigonometria"
    : code.startsWith("E") ? "Estatística"
    : "Álgebra";
  return {
    id,
    code,
    order: i + 1,
    title: titles[id] ?? "Conteúdo da trilha",
    area,
    free: id === "A1" || id === "GP1" || id === "T1",
  };
});
