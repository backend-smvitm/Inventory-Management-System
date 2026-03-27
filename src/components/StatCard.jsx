import React from "react";

export default function StatCard({
  title,
  value,
  description,
  accent = "blue",
}) {
  const accentClasses = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          accentClasses[accent] || accentClasses.blue
        }`}
      >
        {title}
      </div>
      <p className="mt-4 text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}
