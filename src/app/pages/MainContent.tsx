import { motion } from "framer-motion";
import styles from "./ItaiReactApp.styles";

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-4">Itai full react all areas</h1>

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
          Live Demo
        </a>
      </div>

      <br />

      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🏗️ Architecture</td>
            <td>
              Modular folder structure, container/presentational split,
              dependency injection
            </td>
          </tr>
          <tr>
            <td>⚛️ React</td>
            <td>Hooks, Context API, Portals, Suspense, lazy, memoization</td>
          </tr>
          <tr>
            <td>🪝 State Management</td>
            <td>useReducer, Context, Zustand, Redux Toolkit (RTK)</td>
          </tr>
          <tr>
            <td>🧪 Testing</td>
            <td>
              Unit (Jest, React Testing Library), E2E (Cypress or Playwright)
            </td>
          </tr>
          <tr>
            <td>💅 Styling</td>
            <td>Tailwind CSS, CSS Modules, Styled Components</td>
          </tr>
          <tr>
            <td>🔄 Data Fetching</td>
            <td>REST, GraphQL, SWR, React Query</td>
          </tr>
          <tr>
            <td>📦 Backend Integration</td>
            <td>Node.js + Express API or Firebase/Supabase</td>
          </tr>
          <tr>
            <td>🔐 Authentication</td>
            <td>JWT, OAuth, Firebase Auth, role-based access</td>
          </tr>
          <tr>
            <td>🧭 Routing</td>
            <td>React Router v6, Protected routes, Nested routes</td>
          </tr>
          <tr>
            <td>⚙️ Forms</td>
            <td>react-hook-form, validation (Yup/Zod)</td>
          </tr>
          <tr>
            <td>📂 File Management</td>
            <td>
              File uploads, drag-drop (e.g. tasks/files), CDN (Cloudinary)
            </td>
          </tr>
          <tr>
            <td>🧰 Dev Tools</td>
            <td>Vite, ESLint, Prettier, Husky, Git hooks</td>
          </tr>
          <tr>
            <td>⚡ Performance</td>
            <td>memo, useCallback, virtualization, lazy loading</td>
          </tr>
          <tr>
            <td>🔍 Accessibility</td>
            <td>ARIA, keyboard nav, semantic HTML</td>
          </tr>
          <tr>
            <td>🚀 DevOps</td>
            <td>GitHub Actions, Netlify/Vercel deployment, Docker</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default MainContent;
