// src/styles/tokens.js

export const C = {
  accentMid: "#4f46e5",
  border: "#e5e7eb",
  borderMed: "#d1d5db",
  muted: "#6b7280",
  card: "#ffffff",
};

export const S = {
  badge: (color) => ({
    backgroundColor: color,
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 6,
  }),

  btn: (type) => ({
    backgroundColor: type === "primary" ? "#4f46e5" : "transparent",
    color: type === "primary" ? "#fff" : "#111",
    border: "1px solid #ccc",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  }),

  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: 6,
  },
};