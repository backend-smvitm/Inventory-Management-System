import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

const stats = [
  { title: "Total Users", value: "120" },
  { title: "Products", value: "85" },
  { title: "Orders", value: "75" },
  { title: "Revenue", value: "₹45,000" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">Welcome Back 👋</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StatCard key={s.title} title={s.title} value={s.value} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;