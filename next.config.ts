import type { NextConfig } from "next";

const legacyCategoryRedirects = [
  {
    source: "/category/a-matematica/:path*",
    destination: "https://blog.waldematica.com.br/artigos/",
  },
  {
    source: "/category/porcentagem-matematica/:path*",
    destination: "https://blog.waldematica.com.br/categoria/razao-e-proporcao/",
  },
  { source: "/category/algebra-para-vestibular/:path*", destination: "https://blog.waldematica.com.br/categoria/algebra/" },
  { source: "/category/algebra/:path*", destination: "https://blog.waldematica.com.br/categoria/algebra/" },
  { source: "/category/curiosidades-da-matematica/:path*", destination: "https://blog.waldematica.com.br/categoria/curiosidades-da-matematica/" },
  { source: "/category/dicas-de-matematica/:path*", destination: "https://blog.waldematica.com.br/categoria/dicas-de-matematica/" },
  { source: "/category/enem/:path*", destination: "https://blog.waldematica.com.br/categoria/matematica-para-o-enem/" },
  { source: "/category/matematica-para-o-enem/:path*", destination: "https://blog.waldematica.com.br/categoria/matematica-para-o-enem/" },
  { source: "/category/funcoes/:path*", destination: "https://blog.waldematica.com.br/categoria/funcoes-matematicas/" },
  { source: "/category/funcoes-matematicas/:path*", destination: "https://blog.waldematica.com.br/categoria/funcoes-matematicas/" },
  { source: "/category/fuvest/:path*", destination: "https://blog.waldematica.com.br/categoria/fuvest/" },
  { source: "/category/geometria-analitica/:path*", destination: "https://blog.waldematica.com.br/categoria/geometria-analitica/" },
  { source: "/category/geometria-espacial/:path*", destination: "https://blog.waldematica.com.br/categoria/geometria-espacial/" },
  { source: "/category/geometria-plana/:path*", destination: "https://blog.waldematica.com.br/categoria/geometria-plana/" },
  { source: "/category/ia-na-educacao/:path*", destination: "https://blog.waldematica.com.br/categoria/inteligencia-artificial-na-educacao/" },
  { source: "/category/inteligencia-artificial-na-educacao/:path*", destination: "https://blog.waldematica.com.br/categoria/inteligencia-artificial-na-educacao/" },
  { source: "/category/profmat/:path*", destination: "https://blog.waldematica.com.br/categoria/profmat/" },
  { source: "/category/razao-e-proporcao/:path*", destination: "https://blog.waldematica.com.br/categoria/razao-e-proporcao/" },
  { source: "/category/trigonometria/:path*", destination: "https://blog.waldematica.com.br/categoria/trigonometria/" },
  { source: "/category/unicamp/:path*", destination: "https://blog.waldematica.com.br/categoria/unicamp/" },
] as const;

const legacyContentRedirects = [
  {
    source: "/razoes-trigonometricas-teoria/:path*",
    destination: "https://blog.waldematica.com.br/razoes-trigonometricas-triangulo-retangulo/",
  },
  {
    source: "/razoes-trigonometricas-aplicacao/:path*",
    destination: "https://blog.waldematica.com.br/razoes-trigonometricas-triangulo-retangulo/",
  },
  {
    source: "/razoes-trigonometricas-macetes/:path*",
    destination: "https://blog.waldematica.com.br/razoes-trigonometricas-triangulo-retangulo/",
  },
  {
    source: "/razoes-trigonometricas-aprofundamento/:path*",
    destination: "https://blog.waldematica.com.br/razoes-trigonometricas-triangulo-retangulo/",
  },
  {
    source: "/razoes-trigonometricas/:path*",
    destination: "https://blog.waldematica.com.br/razoes-trigonometricas-triangulo-retangulo/",
  },
  {
    source: "/produtos-notaveis-aplicacao/:path*",
    destination: "https://blog.waldematica.com.br/produtos-notaveis-fatoracao-vestibular/",
  },
  {
    source: "/produtos-notaveis/:path*",
    destination: "https://blog.waldematica.com.br/produtos-notaveis-fatoracao-vestibular/",
  },
  {
    source: "/fatoracao-teoria/:path*",
    destination: "https://blog.waldematica.com.br/produtos-notaveis-fatoracao-vestibular/",
  },
  {
    source: "/fatoracao-aplicacao/:path*",
    destination: "https://blog.waldematica.com.br/produtos-notaveis-fatoracao-vestibular/",
  },
  {
    source: "/fatoracao-aprofundamento/:path*",
    destination: "https://blog.waldematica.com.br/produtos-notaveis-fatoracao-vestibular/",
  },
  {
    source: "/triangulos-teoria/:path*",
    destination: "https://blog.waldematica.com.br/estudo-dos-triangulos-enem/",
  },
  {
    source: "/triangulos-aplicacao/:path*",
    destination: "https://blog.waldematica.com.br/estudo-dos-triangulos-enem/",
  },
  {
    source: "/triangulos-aprofundamento/:path*",
    destination: "https://blog.waldematica.com.br/estudo-dos-triangulos-enem/",
  },
  {
    source: "/angulos-aplicacao/:path*",
    destination: "https://blog.waldematica.com.br/tipos-de-angulos/",
  },
  {
    source: "/angulos-aprofundamento/:path*",
    destination: "https://blog.waldematica.com.br/tipos-de-angulos/",
  },
  {
    source: "/extensivo-2023/:path*",
    destination: "/extensivo/",
  },
] as const;

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

    const postFeedRedirects = blogPostPaths.map((source) => ({
      source: `${source}/feed/:path*`,
      destination: `https://blog.waldematica.com.br${source}/`,
      permanent: true,
    }));

    const legacyContent = legacyContentRedirects.map(({ source, destination }) => ({
      source,
      destination,
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
      ...legacyCategoryRedirects.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      {
        source: "/category/:path*",
        destination: "https://blog.waldematica.com.br/categoria/:path*",
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

      ...legacyContent,
      ...postFeedRedirects,
      ...postRedirects,
    ];
  },
};

export default nextConfig;
