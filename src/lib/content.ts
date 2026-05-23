import type {
  AccordionFeature,
  FooterGroup,
  GpuProduct,
  NavMenu,
  ProductCard,
} from "@/types/site";

export const navMenus: NavMenu[] = [
  { label: "AI factories", href: "/ai-factories" },
  {
    label: "Products",
    columns: [
      {
        heading: "//SUPERCOMPUTERS",
        links: [
          { label: "Superclusters", href: "/superclusters" },
          { label: "1-Click Clusters™", href: "/1-click-clusters" },
          { label: "Instances", href: "/instances" },
        ],
        separator: { label: "Compare", href: "/compare" },
      },
      {
        heading: "//FOR EVERY MISSION",
        links: [
          { label: "Superintelligence", href: "/superintelligence" },
          { label: "Enterprise", href: "/enterprise" },
          { label: "Government", href: "/government" },
          { label: "Startups and researchers", href: "/startups-and-researchers" },
        ],
      },
      {
        heading: "//FOUNDATIONS",
        links: [
          { label: "AI Factories", href: "/ai-factories" },
          { label: "Orchestration", href: "/orchestration" },
          { label: "Lambda Stack", href: "/lambda-stack" },
          { label: "Trust and security", href: "/trust" },
        ],
      },
      {
        heading: "//DOCS",
        links: [
          { label: "Customer stories", href: "/customers" },
          { label: "Documentation", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Research", href: "/research" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    columns: [
      {
        heading: "//INSIDE LAMBDA",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Leadership", href: "/leadership" },
          { label: "Investors", href: "/investors" },
        ],
      },
      {
        heading: "//RESOURCES",
        links: [
          { label: "Research", href: "/research" },
          { label: "LLM Index", href: "/llm-index" },
          { label: "GPU Benchmarks", href: "/benchmarks" },
          { label: "Customer Stories", href: "/customers" },
          { label: "Support", href: "/support" },
          { label: "Blog", href: "/blog" },
          { label: "Partners", href: "/partners" },
        ],
      },
    ],
  },
];

export const builtForAIFeatures: AccordionFeature[] = [
  {
    number: "01",
    title: "You bring models. We bring the compute.",
    body: "Get complete AI factories integrating high-density power, liquid cooling, and NVIDIA GPUs into one system designed for peak AI performance.",
  },
  {
    number: "02",
    title: "Your supercomputer. Your rules.",
    body: "Accelerate every stage of your AI lifecycle. Train foundation models and serve billions of tokens.",
  },
  {
    number: "03",
    title: "Orchestration, handled.",
    body: "Run large-scale AI workloads without the operational burden. We manage your clusters so you can focus on innovation.",
  },
  {
    number: "04",
    title: "Experts included.",
    body: "Co-engineer your workloads with the very people building the infrastructure behind the world’s most advanced models.",
  },
];

export const supercomputerProducts: ProductCard[] = [
  {
    number: "01",
    title: "Superclusters",
    body: "Run on single-tenant NVIDIA GB300 NVL72 clusters with NVIDIA Quantum-2 InfiniBand for ultimate security and performance.",
  },
  {
    number: "02",
    title: "1-Click Clusters™",
    body: "Production-ready NVIDIA HGX B200 and H100 GPU clusters fully optimized for distributed AI workloads.",
  },
  {
    number: "03",
    title: "Instances",
    body: "Spin up HGX B200 and H100 instances in minutes to test and prototype quickly.",
  },
];

export const gpuProducts: GpuProduct[] = [
  {
    number: "01",
    label: "NVIDIA VR200 NVL72",
    description: "Rack-scale systems optimized for agentic AI.",
    image: "/images/gpu/vr200.jpg",
    alt: "NVIDIA VR200 NVL72",
  },
  {
    number: "02",
    label: "NVIDIA GB300 NVL72",
    description: "Rack-scale systems optimized for AI reasoning.",
    image: "/images/gpu/gb300.png",
    alt: "NVIDIA GB300 NVL72",
  },
  {
    number: "03",
    label: "NVIDIA HGX B300",
    description: "Peak performance per watt for the largest training runs.",
    image: "/images/gpu/b300.png",
    alt: "NVIDIA HGX B300",
  },
  {
    number: "04",
    label: "NVIDIA HGX B200",
    description: "Versatile fine-tuning and inference.",
    image: "/images/gpu/b200.png",
    alt: "NVIDIA HGX B200",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    heading: "AI FACTORIES",
    subgroups: [
      {
        label: "//FOR EVERY MISSION",
        links: [
          { label: "Superintelligence", href: "/superintelligence" },
          { label: "Enterprise", href: "/enterprise" },
          { label: "Government", href: "/government" },
          { label: "Startups and researchers", href: "/startups-and-researchers" },
        ],
      },
      {
        label: "//FOUNDATIONS",
        links: [
          { label: "AI infrastructure", href: "/ai-infrastructure" },
          { label: "Trust and security", href: "/trust" },
          { label: "Customer stories", href: "/customers" },
        ],
      },
    ],
  },
  {
    heading: "PRODUCTS",
    subgroups: [
      {
        label: "//PRODUCTS",
        links: [
          { label: "Superclusters", href: "/superclusters" },
          { label: "1-Click Clusters", href: "/1-click-clusters" },
          { label: "Instances", href: "/instances" },
        ],
      },
      {
        label: "//FEATURES",
        links: [
          { label: "AI infrastructure", href: "/ai-infrastructure" },
          { label: "Orchestration", href: "/orchestration" },
          { label: "Lambda Stack", href: "/lambda-stack" },
          { label: "Trust and security", href: "/trust" },
        ],
      },
      {
        label: "//DOCS",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Research", href: "/research" },
        ],
      },
    ],
  },
  {
    heading: "COMPANY",
    subgroups: [
      {
        label: "//INSIDE LAMBDA",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Leadership", href: "/leadership" },
          { label: "Investors", href: "/investors" },
        ],
      },
      {
        label: "//RESOURCES",
        links: [
          { label: "Research", href: "/research" },
          { label: "Customer stories", href: "/customers" },
          { label: "Blog", href: "/blog" },
          { label: "Partners", href: "/partners" },
          { label: "Brand guidelines", href: "/brand" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie preferences", href: "#" },
    ],
  },
];
