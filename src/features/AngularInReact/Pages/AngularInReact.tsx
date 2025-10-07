import { useEffect, useRef } from "react";

declare global {
  interface Window {
    APP_BASE_HREF?: string;
    APP_ASSETS_BASE?: string;
    __webpack_public_path__?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root': any;
    }
  }
}

const AngularInReact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAngularLoaded = useRef(false);

  useEffect(() => {
    if (isAngularLoaded.current) return;

    // CRITICAL: Set asset paths BEFORE Angular bootstraps
    window.APP_BASE_HREF = '/js/ForEmbedAngular/';
    window.APP_ASSETS_BASE = '/js/ForEmbedAngular/';
    window.__webpack_public_path__ = '/js/ForEmbedAngular/';

    // Set base href for Angular routing
    let baseTag = document.querySelector('base');
    if (!baseTag) {
      baseTag = document.createElement('base');
      document.head.insertBefore(baseTag, document.head.firstChild);
    }
    baseTag.href = '/AngularInReact/';

    // Load Angular styles
    if (!document.querySelector('link[href*="styles.6f0cf44faa044024.css"]')) {
      const angularStyle = document.createElement("link");
      angularStyle.rel = "stylesheet";
      angularStyle.href = "/js/ForEmbedAngular/styles.6f0cf44faa044024.css";
      angularStyle.dataset.angularEmbed = "true";
      document.head.appendChild(angularStyle);
    }

    if (!document.querySelector('link[href*="Material+Icons"]')) {
      const materialIcons = document.createElement("link");
      materialIcons.rel = "stylesheet";
      materialIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      materialIcons.dataset.angularEmbed = "true";
      document.head.appendChild(materialIcons);
    }

    // Load Angular script
    if (!document.querySelector('script[src*="main.23dcd94834071479.js"]')) {
      const script = document.createElement("script");
      script.src = `${window.location.origin}/js/ForEmbedAngular/main.23dcd94834071479.js`;
      script.type = "text/javascript";
      script.dataset.angularEmbed = "true";
      script.async = false;

      script.onload = () => {
        console.log('Angular loaded successfully');
        isAngularLoaded.current = true;
      };

      script.onerror = (e) => {
        console.error('Failed to load Angular script:', e);
      };

      document.body.appendChild(script);
    } else {
      isAngularLoaded.current = true;
    }

    // Don't cleanup on unmount to avoid breaking Angular
    return () => {
      // Minimal cleanup - keep Angular loaded for performance
    };
  }, []);

  return (
    <div style={{ padding: "24px", width: "100%", height: "100vh", overflow: "auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Angular Embedded in React
      </h1>

      <div
        ref={containerRef}
        className="angular-widget-container"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "600px",
          backgroundColor: "white"
        }}
      >
        <app-root></app-root>
      </div>
    </div>
  );
};

export default AngularInReact;