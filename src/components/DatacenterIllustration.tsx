import type { ReactNode } from "react";

/** Bottom → top in the isometric stack (matches lambda.ai). */
const LAYERS = [
  { label: "Co-engineering", corner: "#00E6D9" },
  { label: "Managed services", corner: "#E7E6D9" },
  { label: "AI infrastructure", corner: "#6236F4" },
  { label: "Purpose-built datacenters", corner: "#00E6D9" },
] as const;

const SIDE_LABELS = [
  { text: "AI DEVELOPERS", layerIndex: 3 },
  { text: "ENTERPRISE", layerIndex: 1 },
  { text: "SUPERINTELLIGENCE", layerIndex: 0 },
] as const;

/** Accordion item index → highlighted layer index (bottom=0, top=3). */
const ACCORDION_TO_LAYER = [3, 2, 1, 0] as const;

type DatacenterIllustrationProps = {
  activeLayer: number;
};

type LayerGeometry = {
  top: string;
  right: string;
  left: string;
  label: [number, number];
  sideAnchor: [number, number];
  center: [number, number];
  corner: [number, number];
};

export default function DatacenterIllustration({
  activeLayer: activeAccordion,
}: DatacenterIllustrationProps) {
  const originX = 70;
  const originY = 430;
  const boxW = 230;
  const boxD = 135;
  const layerH = 30;
  const gap = 14;
  const groupSplitGap = 44;

  const highlightedLayer = ACCORDION_TO_LAYER[activeAccordion] ?? 3;
  const isGrouped = activeAccordion === 2;

  function toIso(x: number, y: number, z: number): [number, number] {
    return [originX + (x - y) * 0.866, originY - z - (x + y) * 0.5];
  }

  function getLayerZ(index: number): number {
    const base = index * (layerH + gap);
    if (!isGrouped) return base;
    return index >= 2 ? base + groupSplitGap + layerH : base;
  }

  function getLayerHeight(index: number): number {
    if (index === 0 && activeAccordion === 3) return 46;
    return layerH;
  }

  function buildLayer(index: number): LayerGeometry {
    const z = getLayerZ(index);
    const height = getLayerHeight(index);
    const tl = toIso(0, 0, z + height);
    const tr = toIso(boxW, 0, z + height);
    const br = toIso(boxW, boxD, z + height);
    const bl = toIso(0, boxD, z + height);
    const trB = toIso(boxW, 0, z);
    const brB = toIso(boxW, boxD, z);
    const blB = toIso(0, boxD, z);

    return {
      top: `${tl[0]},${tl[1]} ${tr[0]},${tr[1]} ${br[0]},${br[1]} ${bl[0]},${bl[1]}`,
      right: `${br[0]},${br[1]} ${tr[0]},${tr[1]} ${trB[0]},${trB[1]} ${brB[0]},${brB[1]}`,
      left: `${bl[0]},${bl[1]} ${br[0]},${br[1]} ${brB[0]},${brB[1]} ${blB[0]},${blB[1]}`,
      label: toIso(8, boxD * 0.62, z + height * 0.42),
      sideAnchor: toIso(boxW, boxD * 0.48, z + height * 0.5),
      center: toIso(boxW * 0.5, boxD * 0.5, z + height + 0.5),
      corner: tl,
    };
  }

  const layers = LAYERS.map((_, i) => buildLayer(i));
  const sideLabelX = toIso(boxW, 0, 0)[0] + 78;

  function renderChroma(points: string, key: string) {
    return (
      <g key={key} className="iso-chroma" aria-hidden="true">
        <polygon
          points={points}
          fill="none"
          stroke="#00E6D9"
          strokeWidth={0.8}
          opacity={0.45}
          transform="translate(-0.8, 0)"
        />
        <polygon
          points={points}
          fill="none"
          stroke="#E70000"
          strokeWidth={0.8}
          opacity={0.35}
          transform="translate(0.8, 0)"
        />
      </g>
    );
  }

  function renderDots(layer: LayerGeometry): ReactNode[] {
    const dots: ReactNode[] = [];
    for (let gx = 0.14; gx <= 0.86; gx += 0.18) {
      for (let gy = 0.14; gy <= 0.86; gy += 0.18) {
        const dp = toIso(boxW * gx, boxD * gy, getLayerZ(3) + getLayerHeight(3) + 0.5);
        dots.push(
          <circle
            key={`dot-${gx}-${gy}`}
            cx={dp[0]}
            cy={dp[1]}
            r={1.8}
            fill="var(--color-shell)"
            className="iso-dot"
          />
        );
      }
    }
    return dots;
  }

  function renderConcentricCircles(c: [number, number]) {
    return (
      <g className="iso-decoration">
        {[34, 22, 10].map((r, i) => (
          <circle
            key={r}
            cx={c[0]}
            cy={c[1]}
            r={r}
            fill="none"
            stroke="var(--color-shell)"
            strokeWidth={0.7}
            strokeDasharray={i === 2 ? "none" : `${4 - i} ${3 + i}`}
            opacity={0.35 + i * 0.2}
          />
        ))}
      </g>
    );
  }

  function renderVenn(c: [number, number]) {
    return (
      <g className="iso-decoration">
        <circle
          cx={c[0] - 12}
          cy={c[1]}
          r={18}
          fill="none"
          stroke="var(--color-shell)"
          strokeWidth={0.7}
          opacity={0.4}
        />
        <circle
          cx={c[0] + 12}
          cy={c[1]}
          r={18}
          fill="none"
          stroke="var(--color-shell)"
          strokeWidth={0.7}
          opacity={0.4}
        />
        {[-4, 0, 4].map((dx) => (
          <circle
            key={dx}
            cx={c[0] + dx}
            cy={c[1]}
            r={1.4}
            fill="var(--color-shell)"
            opacity={0.75}
          />
        ))}
      </g>
    );
  }

  function renderLayerFaces(index: number, layer: LayerGeometry) {
    const isActive = highlightedLayer === index;
    const stroke = isActive ? "var(--color-shell)" : "var(--color-neutral-800)";
    const faceOpacity = isActive ? 1 : 0.45;
    const fillTop = isActive ? "rgba(11, 11, 11, 0.85)" : "rgba(8, 8, 8, 0.35)";
    const fillSide = isActive ? "rgba(14, 14, 14, 0.7)" : "rgba(6, 6, 6, 0.25)";

    return (
      <g className="iso-layer" data-active={isActive || undefined}>
        <polygon
          points={layer.left}
          fill={fillSide}
          stroke={stroke}
          strokeWidth={isActive ? 1 : 0.6}
          opacity={faceOpacity}
          className="iso-face"
        />
        <polygon
          points={layer.right}
          fill={fillSide}
          stroke={stroke}
          strokeWidth={isActive ? 1 : 0.6}
          opacity={faceOpacity}
          className="iso-face"
        />
        <polygon
          points={layer.top}
          fill={fillTop}
          stroke={stroke}
          strokeWidth={isActive ? 1.2 : 0.6}
          opacity={faceOpacity}
          className="iso-face iso-face-top"
        />
        {isActive && (
          <>
            {renderChroma(layer.top, `chroma-top-${index}`)}
            {renderChroma(layer.left, `chroma-left-${index}`)}
            {renderChroma(layer.right, `chroma-right-${index}`)}
          </>
        )}
      </g>
    );
  }

  function renderGroupConnector() {
    if (!isGrouped) return null;
    const topGroupBottom = layers[2].corner;
    const bottomGroupTop = layers[1].corner;
    const x = topGroupBottom[0] - 28;
    return (
      <line
        x1={x}
        y1={topGroupBottom[1] + 6}
        x2={x}
        y2={bottomGroupTop[1] - 6}
        stroke="var(--color-neutral-700)"
        strokeWidth={0.7}
        strokeDasharray="3 4"
        opacity={0.75}
        className="iso-connector"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 440 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="features-illustration-svg"
      aria-label="Isometric datacenter stack illustration"
      role="img"
    >
      {[0, 1, 2, 3].map((index) => {
        const layer = layers[index];
        const isActive = highlightedLayer === index;

        return (
          <g key={LAYERS[index].label} className="iso-layer-group">
            {renderLayerFaces(index, layer)}

            {isActive && activeAccordion === 0 && index === 3 && renderDots(layer)}
            {isActive && activeAccordion === 2 && index === 1 && renderConcentricCircles(layer.center)}
            {isActive && activeAccordion === 3 && index === 0 && renderVenn(layer.center)}

            <circle
              cx={layer.corner[0]}
              cy={layer.corner[1]}
              r={isActive ? 3.5 : 2.5}
              fill={LAYERS[index].corner}
              opacity={isActive ? 1 : 0.55}
              className="iso-corner"
            />

            <text
              x={layer.label[0]}
              y={layer.label[1]}
              fill={isActive ? "var(--color-neutral-300)" : "var(--color-neutral-500)"}
              fontSize={8.5}
              fontFamily="var(--font-mono)"
              letterSpacing="0.02em"
              className="iso-label"
            >
              {LAYERS[index].label}
            </text>

            <line
              x1={layer.sideAnchor[0]}
              y1={layer.sideAnchor[1]}
              x2={sideLabelX - 16}
              y2={layer.sideAnchor[1]}
              stroke="var(--color-neutral-700)"
              strokeWidth={0.65}
              strokeDasharray="3 3"
              opacity={isActive ? 0.85 : 0.4}
              className="iso-side-line"
            />
          </g>
        );
      })}

      {renderGroupConnector()}

      {SIDE_LABELS.map(({ text, layerIndex }) => {
        const isActiveSide = highlightedLayer === layerIndex;
        return (
          <text
            key={text}
            x={sideLabelX}
            y={layers[layerIndex].sideAnchor[1] + 3}
            fill={isActiveSide ? "var(--color-neutral-300)" : "var(--color-neutral-500)"}
            fontSize={8.5}
            fontFamily="var(--font-mono)"
            letterSpacing="0.1em"
            className="iso-side-label"
          >
            {text}
          </text>
        );
      })}
    </svg>
  );
}
