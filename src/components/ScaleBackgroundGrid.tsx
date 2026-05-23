import ScaleBackgroundTile from "./ScaleBackgroundTile";

export default function ScaleBackgroundGrid() {
  return (
    <div className="scale-background" aria-hidden="true">
      <ScaleBackgroundTile idPrefix="scale-bg-1" />
      <ScaleBackgroundTile idPrefix="scale-bg-2" />
      <ScaleBackgroundTile idPrefix="scale-bg-3" />
    </div>
  );
}
