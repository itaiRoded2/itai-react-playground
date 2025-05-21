import { CSSProperties } from "react";

interface Styles extends Record<string, CSSProperties> {
  appContainer: CSSProperties;
  heading: CSSProperties;
  workflowLinkContainer: CSSProperties;
  link: CSSProperties;
  inputRow: CSSProperties;
  input: CSSProperties;
  addBtn: CSSProperties;
  todoList: CSSProperties;
  todoItem: CSSProperties;
  todoCompleted: CSSProperties;
  deleteBtn: CSSProperties;
}

const styles: Styles = {
  appContainer: {
    maxWidth: 600,
    margin: "40px auto",
    padding: "32px",
    fontFamily:
      "&apos;Inter&apos;, -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    color: "#1a1a1a",
    marginBottom: "24px",
    fontSize: "28px",
    fontWeight: "600",
  },
  workflowLinkContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    textAlign: "center",
    marginBottom: "32px",
    fontSize: "14px",
    color: "#666",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.2s ease",
  },
  inputRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
  },
  input: {
    flexGrow: 1,
    padding: "12px 16px",
    fontSize: "16px",
    border: "2px solid #e5e7eb",
    borderRadius: "8px",
  },
  addBtn: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "500",
  },
  todoList: {
    listStyle: "none",
    paddingLeft: 0,
    maxHeight: "400px",
    overflowY: "auto",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #e5e7eb",
    cursor: "pointer",
    fontSize: "16px",
    color: "#1a1a1a",
    userSelect: "none",
  },
  todoCompleted: {
    textDecoration: "line-through",
    color: "#9ca3af",
    backgroundColor: "#f9fafb",
  },
  deleteBtn: {
    cursor: "pointer",
    border: "none",
    background: "transparent",
    fontSize: "18px",
    lineHeight: 1,
    color: "#ef4444",
    padding: "4px",
    borderRadius: "4px",
  },
};

export default styles;
