// ─── frontend/components/JobCard.jsx ─────────────────────────────────────────
import { C, S } from "../styles/tokens";
import { TypeBadge } from "./TypeBadge";

export function JobCard({ job, onOpen, saved, onSave }) {
  return (
    <div
      onClick={() => onOpen(job)}
      style={{
        ...S.card,
        cursor: "pointer",
        position: "relative",
        transition: "border-color .2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.accentMid)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
    >
      {/* New badge */}
      {job.isNew && (
        <span
          style={{
            ...S.badge(C.danger),
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          New
        </span>
      )}

      {/* Company + title row */}
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: C.accentLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          {job.emoji}
        </div>
        <div>
          <div
            style={{
              fontWeight: 500,
              fontSize: 14,
              color: C.text,
              marginBottom: 2,
            }}
          >
            {job.title}
          </div>
          <div style={{ fontSize: 12, color: C.muted }}>{job.company}</div>
        </div>
      </div>

      {/* Location + category */}
      <div
        style={{
          display: "flex",
          gap: 12,
          fontSize: 12,
          color: C.muted,
          marginBottom: 10,
        }}
      >
        <span>📍 {job.loc}</span>
        <span>📂 {job.cat}</span>
      </div>

      {/* Skills */}
      {job.skills && job.skills.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 10,
          }}
        >
          {job.skills.map((skill, idx) => (
            <span
              key={idx}
              style={{
                fontSize: 11,
                background: C.accentLight,
                color: C.accentMid,
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Salary + type + save */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 10,
          borderTop: `0.5px solid ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 500, fontSize: 13, color: C.accentMid }}>
            {job.salary}
          </span>
          <TypeBadge type={job.type} />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSave(job.id);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            color: saved ? C.accentMid : C.muted,
          }}
        >
          🔖
        </button>
      </div>
    </div>
  );
}