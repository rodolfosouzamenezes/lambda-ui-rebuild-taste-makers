export default function ScaleBackgroundTile({ idPrefix }: { idPrefix: string }) {
  const svg = `<svg width="315" height="315" viewBox="0 0 315 315" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="{idPrefix}-mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="315" height="315">
<rect width="315" height="315" fill="#D9D9D9" />
</mask>
<g mask="url(#{idPrefix}-mask)">
<rect width="315" height="315" fill="#0B0B0B" />
</g>
<rect x="29" y="165" width="4" height="4" fill="#252525" />
<rect x="25" y="169" width="4" height="4" fill="#252525" />
<rect x="29" y="173" width="4" height="4" fill="#252525" />
<rect x="33" y="177" width="4" height="4" fill="#252525" />
<rect x="41" y="169" width="4" height="4" transform="rotate(90 41 169)" fill="#252525" />
<rect x="33" y="165" width="4" height="4" fill="#252525" />
<rect x="41" y="173" width="4" height="4" transform="rotate(90 41 173)" fill="#252525" />
<rect x="31" y="46" width="4" height="4" fill="#252525" />
<rect x="27" y="50" width="4" height="4" fill="#252525" />
<rect x="31" y="54" width="4" height="4" fill="#252525" />
<rect x="35" y="58" width="4" height="4" fill="#252525" />
<rect x="43" y="50" width="4" height="4" transform="rotate(90 43 50)" fill="#252525" />
<rect x="35" y="46" width="4" height="4" fill="#252525" />
<rect x="43" y="54" width="4" height="4" transform="rotate(90 43 54)" fill="#252525" />
<rect x="313.998" y="301" width="4" height="4" transform="rotate(90 313.998 301)" fill="#252525" />
<rect x="309.998" y="297" width="4" height="4" transform="rotate(90 309.998 297)" fill="#252525" />
<rect x="305.998" y="301" width="4" height="4" transform="rotate(90 305.998 301)" fill="#252525" />
<rect x="301.998" y="305" width="4" height="4" transform="rotate(90 301.998 305)" fill="#252525" />
<rect x="309.998" y="313" width="4" height="4" transform="rotate(-180 309.998 313)" fill="#252525" />
<rect x="313.998" y="305" width="4" height="4" transform="rotate(90 313.998 305)" fill="#252525" />
<rect x="305.998" y="313" width="4" height="4" transform="rotate(-180 305.998 313)" fill="#252525" />
<rect x="4" width="4" height="4" transform="rotate(90 4 0)" fill="#252525" />
<rect x="4" y="4" width="4" height="4" transform="rotate(90 4 4)" fill="#252525" />
<rect x="12" y="4" width="4" height="4" transform="rotate(90 12 4)" fill="#252525" />
<rect x="8" y="8" width="4" height="4" transform="rotate(90 8 8)" fill="#252525" />
<rect x="8" width="4" height="4" transform="rotate(90 8 0)" fill="#252525" />
<rect x="121" y="146" width="4" height="4" fill="#252525" />
<rect x="121" y="150" width="4" height="4" fill="#252525" />
<rect x="125" y="146" width="4" height="4" fill="#252525" />
<rect x="125" y="150" width="4" height="4" fill="#252525" />
<rect x="129" y="154" width="4" height="4" fill="#252525" />
<rect x="129" y="158" width="4" height="4" fill="#252525" />
<rect x="133" y="154" width="4" height="4" fill="#252525" />
<rect x="133" y="158" width="4" height="4" fill="#252525" />
<g filter="url(#{idPrefix}-filter0)">
<rect x="284" y="256" width="4" height="4" fill="#E7E6D9" />
<rect x="284" y="260" width="4" height="4" fill="#E7E6D9" />
<rect x="288" y="256" width="4" height="4" fill="#E7E6D9" />
<rect x="288" y="260" width="4" height="4" fill="#E7E6D9" />
</g>
<g filter="url(#{idPrefix}-filter1)">
<rect x="76" y="205" width="4" height="4" fill="#E7E6D9" />
<rect x="76" y="209" width="4" height="4" fill="#E7E6D9" />
<rect x="80" y="205" width="4" height="4" fill="#E7E6D9" />
<rect x="80" y="209" width="4" height="4" fill="#E7E6D9" />
</g>
<rect x="43" y="146" width="4" height="4" fill="#252525" />
<rect x="47" y="150" width="4" height="4" fill="#252525" />
<rect x="47" y="154" width="4" height="4" fill="#252525" />
<rect x="43" y="158" width="4" height="4" fill="#252525" />
<rect x="39" y="154" width="4" height="4" fill="#252525" />
<rect x="39" y="150" width="4" height="4" fill="#252525" />
<rect x="216" y="213" width="4" height="4" fill="#252525" />
<rect x="220" y="217" width="4" height="4" fill="#252525" />
<rect x="220" y="221" width="4" height="4" fill="#252525" />
<rect x="216" y="225" width="4" height="4" fill="#252525" />
<rect x="212" y="221" width="4" height="4" fill="#252525" />
<rect x="212" y="217" width="4" height="4" fill="#252525" />
<g filter="url(#{idPrefix}-filter2)">
<rect x="212.003" y="123" width="4" height="4" transform="rotate(90 212.003 123)" fill="#E7E6D9" />
<rect x="208.003" y="127" width="4" height="4" transform="rotate(90 208.003 127)" fill="#E7E6D9" />
<rect x="204.003" y="127" width="4" height="4" transform="rotate(90 204.003 127)" fill="#E7E6D9" />
<rect x="200.003" y="123" width="4" height="4" transform="rotate(90 200.003 123)" fill="#E7E6D9" />
<rect x="204.003" y="119" width="4" height="4" transform="rotate(90 204.003 119)" fill="#E7E6D9" />
<rect x="208.003" y="119" width="4" height="4" transform="rotate(90 208.003 119)" fill="#E7E6D9" />
</g>
<rect x="73" y="26" width="4" height="4" fill="#252525" />
<rect x="77" y="30" width="4" height="4" fill="#252525" />
<rect x="73" y="34" width="4" height="4" fill="#252525" />
<rect x="69" y="30" width="4" height="4" fill="#252525" />
<rect x="145" y="260" width="4" height="4" fill="#252525" />
<rect x="149" y="264" width="4" height="4" fill="#252525" />
<rect x="145" y="268" width="4" height="4" fill="#252525" />
<rect x="141" y="264" width="4" height="4" fill="#252525" />
<defs>
<filter id="{idPrefix}-filter0" x="282.02" y="255.01" width="11.9609" height="9.98045" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feflood floodOpacity="0" result="BackgroundImageFix" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-1.98045" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect1_dropShadow_1249_11749" result="effect2_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect2_dropShadow_1249_11749" result="effect3_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="1.98045" dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect3_dropShadow_1249_11749" result="effect4_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect4_dropShadow_1249_11749" result="effect5_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect5_dropShadow_1249_11749" result="effect6_dropShadow_1249_11749" />
<feblend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1249_11749" result="shape" />
</filter>
<filter id="{idPrefix}-filter1" x="74.0196" y="204.01" width="11.9609" height="9.98045" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feflood floodOpacity="0" result="BackgroundImageFix" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-1.98045" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect1_dropShadow_1249_11749" result="effect2_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect2_dropShadow_1249_11749" result="effect3_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="1.98045" dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect3_dropShadow_1249_11749" result="effect4_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect4_dropShadow_1249_11749" result="effect5_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect5_dropShadow_1249_11749" result="effect6_dropShadow_1249_11749" />
<feblend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1249_11749" result="shape" />
</filter>
<filter id="{idPrefix}-filter2" x="194.023" y="118.009" width="19.9609" height="13.9804" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feflood floodOpacity="0" result="BackgroundImageFix" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-1.98045" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect1_dropShadow_1249_11749" result="effect2_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="-0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect2_dropShadow_1249_11749" result="effect3_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="1.98045" dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect3_dropShadow_1249_11749" result="effect4_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dx="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
<feblend mode="normal" in2="effect4_dropShadow_1249_11749" result="effect5_dropShadow_1249_11749" />
<fecolormatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
<feoffset dy="0.990224" />
<fecomposite in2="hardAlpha" operator="out" />
<fecolormatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
<feblend mode="normal" in2="effect5_dropShadow_1249_11749" result="effect6_dropShadow_1249_11749" />
<feblend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_1249_11749" result="shape" />
</filter>
</defs>
</svg>`;
  return <div dangerouslySetInnerHTML={{ __html: svg.replace(/{idPrefix}/g, idPrefix) }} />;
}
