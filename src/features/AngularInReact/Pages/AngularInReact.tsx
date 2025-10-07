import React from "react";

const AngularInReact: React.FC = () => {
  // Detect if running on GitHub Pages or localhost
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/itai-react-playground" : "";

  const iframeSrc = `${basePath}/angular-wrapper.html`;

  return (
    <div style={{ padding: "24px", width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Angular Embedded in React
      </h1>

      <iframe
        src={iframeSrc}
        style={{
          width: "100%",
          flex: 1,
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          backgroundColor: "white"
        }}
        title="Angular Application"
        onError={() => {
          console.error("Failed to load Angular iframe:", iframeSrc);
        }}
      />
    </div>
  );
};

export default AngularInReact;