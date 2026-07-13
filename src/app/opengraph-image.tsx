import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "Dr. Amrutanshu Panigrahi — Assistant Professor, Researcher, Postdoctoral Fellow";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#fafafa",
              color: "#0a0a0a",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            AP
          </div>
          <div style={{ fontSize: 24, color: "#a1a1aa" }}>
            Bhubaneswar, Odisha, India
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>
            Dr. Amrutanshu Panigrahi
          </div>
          <div style={{ fontSize: 32, color: "#d4d4d8" }}>
            Assistant Professor &nbsp;•&nbsp; Researcher &nbsp;•&nbsp;
            Postdoctoral Fellow
          </div>
          <div style={{ fontSize: 26, color: "#71717a", maxWidth: 900 }}>
            Blockchain · Artificial Intelligence · Machine Learning ·
            Healthcare AI · Cloud Computing
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#52525b",
            borderTop: "1px solid #27272a",
            paddingTop: 28,
          }}
        >
          <span>Research · Teaching · Innovation</span>
          <span>100+ Publications · 3 Patents · 3 Books</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
