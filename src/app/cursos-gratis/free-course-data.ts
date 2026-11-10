/**
 * Catálogo público dos três módulos gratuitos da Waldemática.
 * Mantém os mesmos 23 vídeos e os links de materiais da página Cursos Grátis.
 * Este arquivo contém somente dados públicos: nenhuma integração de IA,
 * autenticação, Supabase ou acesso a recursos pagos.
 */

export type FreeCourseVideo = {
  order: number;
  lesson: number;
  title: string;
  category: string;
  videoId: string;
};

export type FreeCourseModule = {
  id: string;
  code: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  materialUrl: string;
  videos: FreeCourseVideo[];
};

export const modules: FreeCourseModule[] = [
  {
    id: "algebra",
    code: "A1",
    eyebrow: "MÓDULO 1 DE ÁLGEBRA",
    title: "Produtos Notáveis e Fatoração",
    shortTitle: "Álgebra",
    description:
      "Construa uma base sólida em Álgebra com teoria, exercícios de aplicação e aprofundamento.",
    icon: "∑",
    materialUrl:
      "https://drive.google.com/drive/folders/1KeHln5Kipiyl12KYr0bFMtVnD_C8yRj6?usp=drive_link",
    videos: [
      { order: 1, lesson: 0, title: "Introdução ao Módulo 1 de Álgebra", category: "Introdução", videoId: "wdE9xFdpLIs" },
      { order: 2, lesson: 1, title: "Produtos Notáveis | Teoria", category: "Teoria", videoId: "2tIgFtcRSaY" },
      { order: 3, lesson: 1, title: "Produtos Notáveis | Exercícios de Aplicação", category: "Aplicação", videoId: "k6e2W1L3Xgk" },
      { order: 4, lesson: 1, title: "Produtos Notáveis | Aprofundamento", category: "Aprofundamento", videoId: "IlRg0KUMQKs" },
      { order: 5, lesson: 2, title: "Fatoração | Teoria", category: "Teoria", videoId: "8r5ol89ZiAU" },
      { order: 6, lesson: 2, title: "Fatoração | Exercícios de Aplicação", category: "Aplicação", videoId: "0uPQG1SA8SM" },
      { order: 7, lesson: 2, title: "Fatoração | Exercícios de Aprofundamento", category: "Aprofundamento", videoId: "Q48c7sB-xjU" },
    ],
  },
  {
    id: "geometria-plana",
    code: "GP1",
    eyebrow: "MÓDULO 1 DE GEOMETRIA PLANA",
    title: "Ângulos, Paralelismo e Triângulos",
    shortTitle: "Geometria Plana",
    description:
      "Entenda a lógica da Geometria Plana e avance por Ângulos, Paralelismo e Triângulos com teoria e prática.",
    icon: "△",
    materialUrl:
      "https://drive.google.com/drive/folders/1Uz3kCU27_5V_e_p9rt1zt1WtxB-SPX3e?usp=drive_link",
    videos: [
      { order: 1, lesson: 0, title: "Introdução ao Curso de Geometria Plana", category: "Introdução", videoId: "pe8TxqUzYy8" },
      { order: 2, lesson: 1, title: "Ângulos | Teoria - Nomenclatura e Teoremas", category: "Teoria", videoId: "Ml7J7IZk5aQ" },
      { order: 3, lesson: 1, title: "Ângulos | Exercícios de Aplicação", category: "Aplicação", videoId: "fU-PndXL6_k" },
      { order: 4, lesson: 1, title: "Ângulos | Exercícios de Aprofundamento", category: "Aprofundamento", videoId: "mbThz97Ff4g" },
      { order: 5, lesson: 2, title: "Paralelismo | Classificações e Teoremas", category: "Teoria", videoId: "MwvVcYNGv0M" },
      { order: 6, lesson: 2, title: "Paralelismo | Exercícios de Aplicação", category: "Aplicação", videoId: "W4uZryOVwI0" },
      { order: 7, lesson: 2, title: "Paralelismo | Aprofundamento", category: "Aprofundamento", videoId: "aJUxda_dwpg" },
      { order: 8, lesson: 3, title: "Triângulos | Teoria - Teoremas", category: "Teoria", videoId: "w6qZlO9beP8" },
      { order: 9, lesson: 3, title: "Triângulos | Nomenclatura", category: "Teoria", videoId: "T3dJGhlxuzo" },
      { order: 10, lesson: 3, title: "Triângulos | Exercícios de Aplicação", category: "Aplicação", videoId: "jq05p4bbbhc" },
      { order: 11, lesson: 3, title: "Triângulos | Exercícios de Aprofundamento", category: "Aprofundamento", videoId: "kPeT7s7LuuA" },
    ],
  },
  {
    id: "trigonometria",
    code: "T1",
    eyebrow: "MÓDULO 1 DE TRIGONOMETRIA",
    title: "Trigonometria no Triângulo Retângulo",
    shortTitle: "Trigonometria",
    description:
      "Aprenda razões trigonométricas com teoria, macetes, exercícios de aplicação e aprofundamento.",
    icon: "θ",
    materialUrl:
      "https://drive.google.com/drive/folders/1aQ0QGqH-ZiEY4YNWH4W1TuGfQUte3rQ0?usp=drive_link",
    videos: [
      { order: 1, lesson: 0, title: "Introdução à Trigonometria", category: "Introdução", videoId: "L2Yr3yLYXDI" },
      { order: 2, lesson: 1, title: "Trigonometria no Triângulo Retângulo | Teoria", category: "Teoria", videoId: "fEpyODX9iFM" },
      { order: 3, lesson: 1, title: "Trigonometria no Triângulo Retângulo | Macetes", category: "Macetes", videoId: "Ad1G23VkEwg" },
      { order: 4, lesson: 1, title: "Trigonometria no Triângulo Retângulo | Aplicação", category: "Aplicação", videoId: "tMT_VUMfuls" },
      { order: 5, lesson: 1, title: "Trigonometria no Triângulo Retângulo | Aprofundamento", category: "Aprofundamento", videoId: "MzJRbBfXOwI" },
    ],
  },
];
