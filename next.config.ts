import type { NextConfig } from "next";

const blogPostPaths = [
  "/matematica-enem",
  "/funcao-do-1-grau",
  "/funcao-do-2-grau",
  "/escalas-enem",
  "/volume-dos-solidos",
  "/o-que-e-logaritmo",
  "/10-erros-comuns-no-enem",
  "/estudo-dos-triangulos-enem",
  "/razoes-trigonometricas-triangulo-retangulo",
  "/produtos-notaveis-fatoracao-vestibular",
  "/prova-da-fuvest-imersao",
  "/porcentagem-aumento-e-desconto-fuvest",
  "/10-assuntos-que-mais-caem-matematica-enem",
  "/como-passar-de-800-pontos-matematica-enem",
  "/resolver-questoes-discursivas-matematica",
  "/ia-para-estudar-enem",
  "/como-interpretar-problemas-de-matematica",
  "/regra-de-tres",
  "/como-calcular-mmc-e-mdc-enem",
  "/curso-para-o-profmat",
  "/provas-do-profmat-resolucoes-comentadas",
  "/analise-combinatoria",
  "/como-estudar-matematica-do-zero",
  "/melhor-ia-para-estudar",
  "/assuntos-de-matematica-que-mais-caem-no-enem",
  "/ganhar-tempo-na-prova-de-matematica",
  "/tipos-de-angulos",
  "/exercicios-de-probabilidade-lista",
  "/formulas-de-area-de-triangulo",
  "/quanto-tempo-estudar-matematica-por-dia",
  "/como-aprender-matematica",
  "/relacoes-metricas-no-triangulo-retangulo",
  "/comprimento-da-circunferencia",
  "/o-que-mais-cai-em-matematica-no-enem",
  "/ciclo-trigonometrico-seno-cosseno",
  "/resumo-de-geometria-analitica",
  "/equacao-da-reta",
  "/futuro-da-educacao-com-ia",
  "/o-que-sao-quadrilateros",
  "/razao-e-proporcao-no-enem",
  "/areas-de-figuras-planas-resumo-enem",
  "/analise-combinatoria-no-enem",
  "/crescimento-populacional-em-pg",
  "/circunferencia-na-geometria-analitica",
  "/estatistica-no-enem",
  "/juros-simples-e-juros-compostos",
  "/vertice-da-parabola-no-enem",
  "/constante-de-kaprekar",
  "/vestibular-unicamp-2027",
  "/pa-e-pg-no-enem",
  "/polinomios-no-enem-e-vestibulares",
  "/probabilidade-condicional-no-enem",
  "/interpretacao-de-graficos",
  "/inteligencia-artificial-na-educacao",
  "/graficos-das-funcoes-trigonometricas",
] as const;

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    const postRedirects = blogPostPaths.map((source) => ({
      source,
      destination: `https://blog.waldematica.com.br${source}/`,
      permanent: true,
    }));

    return [
      {
        source: "/blog",
        destination: "https://blog.waldematica.com.br/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.waldematica.com.br/:path*",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "https://blog.waldematica.com.br/category/:path*",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "https://blog.waldematica.com.br/tag/:path*",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "https://blog.waldematica.com.br/author/:path*",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "https://blog.waldematica.com.br/wp-content/:path*",
        permanent: true,
      },

      ...postRedirects,
    ];
  },
};

export default nextConfig;
