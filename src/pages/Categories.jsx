import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import DashboardLayout from "../layouts/DashboardLayout";

const initialCategories = [
  { name: "Accessories" },
  { name: "Devices" },
  { name: "Office Supplies" },
  { name: "Networking" },
];

export default function Categories() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState(initialCategories);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    setCategories([...categories, { name: name.trim() }]);
    setName("");
    setError("");
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.4fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Categories</h2>
          <p className="mt-1 text-sm text-slate-500">
            Create category groups to keep products organized.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Input
                label="Category Name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                placeholder="Enter category name"
                error={error}
              />
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>

            <Button text="Add Category" type="submit" fullWidth={false} />
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Category List
              </h3>
              <p className="text-sm text-slate-500">
                {categories.length} categories available
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-medium text-slate-800">{category.name}</p>
                <p className="mt-1 text-sm text-slate-500">
                  Ready to assign products
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
