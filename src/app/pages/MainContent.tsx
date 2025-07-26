import { motion } from "framer-motion";
import styles from "./ItaiReactApp.styles";

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "separate",
  borderSpacing: 0,
  marginTop: "1rem",
  background: "#fff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
  fontSize: "1.05rem",
  letterSpacing: "0.01em",
};

const thStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #f3f4f6 0%, #e0e7ff 100%)",
  color: "#222",
  fontWeight: 700,
  padding: "16px 20px",
  borderBottom: "2px solid #e5e7eb",
  textAlign: "left",
  fontSize: "1.1rem",
  letterSpacing: "0.02em",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const tdStyle: React.CSSProperties = {
  padding: "14px 20px",
  borderBottom: "1px solid #f1f5f9",
  verticalAlign: "top",
  background: "inherit",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
};

const trEvenStyle: React.CSSProperties = {
  background: "#f8fafc",
};

const trOddStyle: React.CSSProperties = {
  background: "#fff",
};

const trHoverStyle: React.CSSProperties = {
  background: "#e0e7ff",
  boxShadow: "0 2px 8px 0 rgba(99,102,241,0.08)",
  transform: "scale(1.01)",
  zIndex: 2,
  position: "relative",
};

const tableData = [
  [
    "🏗️ Architecture",
    "Modular folder structure, container/presentational split, dependency injection",
  ],
  ["⚛️ React", "Hooks, Context API, Portals, Suspense, lazy, memoization"],
  ["🪝 State Management", "useReducer, Context, Zustand, Redux Toolkit (RTK)"],
  [
    "🧪 Testing",
    "Unit (Jest, React Testing Library), E2E (Cypress or Playwright)",
  ],
  ["💅 Styling", "Tailwind CSS, CSS Modules, Styled Components"],
  ["🔄 Data Fetching", "REST, GraphQL, SWR, React Query"],
  ["📦 Backend Integration", "Node.js + Express API or Firebase/Supabase"],
  ["🔐 Authentication", "JWT, OAuth, Firebase Auth, role-based access"],
  ["🧭 Routing", "React Router v6, Protected routes, Nested routes"],
  ["⚙️ Forms", "react-hook-form, validation (Yup/Zod)"],
  [
    "📂 File Management",
    "File uploads, drag-drop (e.g. tasks/files), CDN (Cloudinary)",
  ],
  ["🧰 Dev Tools", "Vite, ESLint, Prettier, Husky, Git hooks"],
  ["⚡ Performance", "memo, useCallback, virtualization, lazy loading"],
  ["🔍 Accessibility", "ARIA, keyboard nav, semantic HTML"],
  ["🚀 DevOps", "GitHub Actions, Netlify/Vercel deployment, Docker"],
];

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-4">
        Itai Roded full react all areas
      </h1>

      <div style={styles.workflowLinkContainer}>
        <span>Links: </span>
        <a
          href="https://github.com/itaiRoded2/itai-react-playground/actions"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub Actions
        </a>
        <span> | </span>
        <a
          href="https://itairoded2.github.io/itai-react-playground/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          See this deployed App online (using gitgub actions pipline)
        </a>
      </div>

      <br />

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Area</th>
            <th style={thStyle}>Topics</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(([area, topics], i) => {
            // Zebra striping
            const baseStyle = i % 2 === 0 ? trEvenStyle : trOddStyle;
            return (
              <tr
                key={area}
                style={baseStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = String(
                    trHoverStyle.background
                  );
                  e.currentTarget.style.boxShadow = String(
                    trHoverStyle.boxShadow
                  );
                  e.currentTarget.style.transform = String(
                    trHoverStyle.transform
                  );
                  e.currentTarget.style.zIndex = String(trHoverStyle.zIndex);
                  e.currentTarget.style.position = String(
                    trHoverStyle.position
                  );
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = String(
                    baseStyle.background
                  );
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.zIndex = "auto";
                  e.currentTarget.style.position = "static";
                }}
              >
                <td style={tdStyle}>{area}</td>
                <td style={tdStyle}>{topics}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
};

export default MainContent;
