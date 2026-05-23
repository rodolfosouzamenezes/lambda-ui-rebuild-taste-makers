"use client";

import Script from "next/script";
import { createElement } from "react";

export default function SecuritySplineViewer() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.87/build/spline-viewer.js"
        strategy="lazyOnload"
      />
      <div className="security-animation">
        <div className="splineWrapper">
          <div className="splineViewer">
            {createElement("spline-viewer", {
              url: "https://lambda.ai/hubfs/web-static/motion/mission_critical.splinecode",
              "events-target": "global",
              width: "100%",
              height: "100%",
              loading: "lazy",
            })}
          </div>
        </div>
      </div>
    </>
  );
}
