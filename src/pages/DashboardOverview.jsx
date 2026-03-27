import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

const stats = [
  {
    title: "Total Products",
    value: "248",
    description: "Active items available across all categories",
    accent: "blue",
  },
  {
    title: "Total Categories",
    value: "12",
    description: "Organized product groups for quick tracking",
    accent: "emerald",
  },
  {
    title: "Total Stock",
    value: "4,892",
    description: "Combined units currently recorded in inventory",
    accent: "amber",
  },
  {
    title: "Low Stock Count",
    value: "18",
    description: "Products that need replenishment soon",
    accent: "rose",
  },
];

const lowStockProducts = [
  { name: "Wireless Mouse", category: "Accessories", stock: 5, threshold: 10 },
  { name: "A4 Printer Paper", category: "Office Supplies", stock: 12, threshold: 20 },
  { name: "Barcode Scanner", category: "Devices", stock: 3, threshold: 8 },
  { name: "USB Keyboard", category: "Accessories", stock: 7, threshold: 12 },
];

export default function DashboardOverview() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Welcome back to your inventory dashboard
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-blue-100 sm:text-base">
            Monitor stock movement, keep an eye on low-stock alerts, and prepare
            your store for the next restock cycle.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              accent={stat.accent}
            />
          ))}
        </section>

        <section>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Low Stock Products
                </h3>
                <p className="text-sm text-slate-500">
                  Items approaching reorder level
                </p>
              </div>
              <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">
                Needs Action
              </span>
            </div>

            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-slate-800">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Current Stock</p>
                      <p className="font-semibold text-rose-600">{product.stock} units</p>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Minimum Threshold</p>
                      <p className="font-semibold text-slate-800">
                        {product.threshold} units
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
