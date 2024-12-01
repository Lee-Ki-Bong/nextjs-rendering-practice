const renderingTree = [
  {
    type: "렌더링 전략",
    methods: [
      { name: "SSR", slug: "ssr" }, // Server-Side Rendering
      //   { name: "스트리밍 S-SSR", slug: "s-ssr" }, // Streaming SSR
      { name: "SSG", slug: "ssg" }, // Static Site Generation
      { name: "CSR", slug: "csr" }, // Client-Side Rendering
      { name: "PPR", slug: "ppr" }, // Pre-Page Rendering
      //   { name: "최적화된 CSR", slug: "opt-csr" }, // Optimized CSR
      //   { name: "에지 렌더링", slug: "edge" }, // Edge Rendering
      //   { name: "CDN 기반 렌더링", slug: "cdn-render" }, // CDN-Based Rendering
      //   { name: "하이브리드 렌더링", slug: "hybrid" }, // Hybrid Rendering
      //   { name: "혼합 전략 사용", slug: "mixed" }, // Mixed Strategy
    ],
  },
  {
    type: "데이터 패칭 전략",
    methods: [
      { name: "ISR", slug: "isr" }, // Incremental Static Regeneration
      //   { name: "서버 사이드 데이터 패칭", slug: "ssr-data" }, // Server-Side Data Fetching
      //   { name: "정적 데이터 패칭", slug: "ssg-data" }, // Static Data Fetching
      //   { name: "클라이언트 사이드 데이터 패칭", slug: "csr-data" }, // Client-Side Data Fetching
      //   { name: "React 서버 컴포넌트 RSC", slug: "rsc" }, // React Server Components
    ],
  },
  //   {
  //     type: "기타 기능",
  //     methods: [
  //       { name: "미들웨어", slug: "middleware" }, // Middleware
  //       { name: "이미지 최적화", slug: "img-opt" }, // Image Optimization
  //       { name: "국제화", slug: "i18n" }, // Internationalization
  //       { name: "타입스크립트 통합", slug: "ts-integration" }, // TypeScript Integration
  //     ],
  //   },
  //   {
  //     type: "최적화 및 성능 향상",
  //     methods: [
  //       { name: "자동 코드 스플리팅", slug: "auto-split" }, // Automatic Code Splitting
  //       { name: "레이지 로딩", slug: "lazy-load" }, // Lazy Loading
  //       { name: "캐싱 전략", slug: "caching" }, // Caching Strategy
  //     ],
  //   },
];

export default renderingTree;
