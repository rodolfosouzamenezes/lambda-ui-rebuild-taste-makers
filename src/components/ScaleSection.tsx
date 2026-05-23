import ScaleBackgroundGrid from "./ScaleBackgroundGrid";

const PRODUCTS = [
  {
    number: "01",
    title: "Superclusters",
    description:
      "Run on single-tenant NVIDIA GB300 NVL72 clusters with NVIDIA Quantum-2 InfiniBand for ultimate security and performance.",
    href: "https://lambda.ai/superclusters",
  },
  {
    number: "02",
    title: "1-Click Clusters™",
    description:
      "Production-ready NVIDIA HGX B200 and H100 GPU clusters fully optimized for distributed AI workloads.",
    href: "https://lambda.ai/1-click-clusters",
  },
  {
    number: "03",
    title: "Instances",
    description:
      "Spin up HGX B200 and H100 instances in minutes to test and prototype quickly.",
    href: "https://lambda.ai/instances",
  },
] as const;

export default function ScaleSection() {
  return (
    <section id="section-scale" className="pt-xl pb-xl module-comp">
      <div className="container">
        <div className="stack--md">
          <div className="scale-title-block dark-mode titleBlock">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-7">
                <div>
                  <h2 className="h2">Supercomputers that scale with ambition</h2>
                  <div className="content">
                    <div className="richtext">
                      From one GPU to hundreds of thousands — performance that keeps pace.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scale-product-cards-container">
            <ScaleBackgroundGrid />

            <div className="scale-product-cards">
              {PRODUCTS.map((product) => (
                <a
                  key={product.number}
                  href={product.href}
                  className="scale-product-card scale-product-card-link"
                  aria-label={product.title}
                >
                  <div className="scale-product-content">
                    <p className="scale-product-number index-number" aria-hidden="true">
                      {product.number}
                    </p>
                    <h3 className="h6">{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sectionBorder" />
    </section>
  );
}
