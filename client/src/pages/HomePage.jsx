// ─── frontend/pages/HomePage.jsx ─────────────────────────────────────────────

import { useState } from "react";
import { C, S } from "../styles/tokens";
import { JobCard } from "../components/JobCard"; // ✅ make sure this exists

const STATS = [
  ["12,400+", "Active Jobs"],
  ["3,200+", "Companies"],
  ["98K+", "Job Seekers"],
  ["88%", "Placement Rate"],
];

export default function HomePage({
  setView,
  jobs = [],              // ✅ default value
  saved = new Set(),      // ✅ default value
  onSave,
  onOpenJob,
}) {
  const [search, setSearch] = useState("");

  return (
    <div>

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <div
        style={{
          padding: "60px 24px 40px",
          textAlign: "center",
          borderBottom: `0.5px solid ${C?.border || "#ddd"}`,
        }}
      >

        {/* Badge */}
        <div
          style={{
            ...(S?.badge ? S.badge(C?.accentMid || "#4f46e5") : {}),
            display: "inline-block",
            marginBottom: 16,
            fontSize: 12,
          }}
        >
          2,400+ New Jobs This Week
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 36, fontWeight: 500, margin: "0 0 12px" }}>
          Find Your{" "}
          <span style={{ color: C?.accentMid || "blue" }}>
            Dream Job
          </span>{" "}
          Today!
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: C?.muted || "#666",
            fontSize: 14,
            maxWidth: 440,
            margin: "0 auto 28px",
          }}
        >
          Connect with top employers across Nepal and beyond.
        </p>

        {/* Search bar */}
        <div
          style={{
            display: "flex",
            maxWidth: 560,
            margin: "0 auto 20px",
            background: C?.card || "#fff",
            border: `1px solid ${C?.borderMed || "#ccc"}`,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Job title, keyword, or company..."
            style={{
              ...(S?.input || {}),
              border: "none",
              flex: 1,
              padding: "10px",
            }}
          />

          <button
            onClick={() => setView && setView("jobs")}
            style={{
              ...(S?.btn ? S.btn("primary") : {}),
              padding: "0 20px",
            }}
          >
            Search
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {STATS.map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, color: C?.accentMid }}>
                {n}
              </div>
              <div style={{ fontSize: 12, color: C?.muted }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recent Jobs ─────────────────────────────────────────── */}
      <div style={{ padding: "24px" }}>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2>Recent Jobs Available</h2>

          <button
            onClick={() => setView && setView("jobs")}
            style={S?.btn ? S.btn("ghost") : {}}
          >
            View All →
          </button>
        </div>

        {/* Jobs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 12,
          }}
        >
          {(jobs || []).length > 0 ? (
            jobs.slice(0, 6).map((j) => (
              <JobCard
                key={j.id}
                job={j}
                onOpen={onOpenJob}
                saved={saved?.has?.(j.id)}
                onSave={onSave}
              />
            ))
          ) : (
            <div>No jobs available</div>
          )}
        </div>

      </div>
    </div>
  );
}