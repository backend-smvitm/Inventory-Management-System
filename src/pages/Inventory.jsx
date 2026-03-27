import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import DashboardLayout from "../layouts/DashboardLayout";

const stockItems = [
  { productId: "PRD-101", name: "Wireless Mouse", stock: 18, status: "Healthy" },
  { productId: "PRD-102", name: "Barcode Scanner", stock: 5, status: "Low" },
  { productId: "PRD-103", name: "Printer Ink Set", stock: 24, status: "Healthy" },
  { productId: "PRD-104", name: "USB Keyboard", stock: 7, status: "Low" },
];

const initialTransactions = [
  {
    productId: "PRD-101",
    type: "IN",
    quantity: "15",
    remarks: "Monthly restock",
  },
  {
    productId: "PRD-102",
    type: "OUT",
    quantity: "3",
    remarks: "Sales order dispatch",
  },
];

export default function Inventory() {
  const [form, setForm] = useState({
    productId: "",
    type: "IN",
    quantity: "",
    remarks: "",
  });
  const [transactions, setTransactions] = useState(initialTransactions);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.productId.trim()) newErrors.productId = "Product ID is required";
    if (!form.quantity || Number(form.quantity) <= 0) {
      newErrors.quantity = "Quantity should be greater than 0";
    }
    if (!form.remarks.trim()) newErrors.remarks = "Remarks are required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setTransactions([form, ...transactions]);
    setForm({
      productId: "",
      type: "IN",
      quantity: "",
      remarks: "",
    });
    setErrors({});
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Inventory</h2>
          <p className="mt-1 text-sm text-slate-500">
            Track stock levels and showcase transaction flow without backend integration.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Product Stock List</h3>
              <p className="text-sm text-slate-500">Current stock snapshot</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stockItems.map((item) => (
              <div
                key={item.productId}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm text-slate-500">{item.productId}</p>
                <p className="mt-1 font-semibold text-slate-800">{item.name}</p>
                <p className="mt-3 text-2xl font-bold text-slate-900">{item.stock}</p>
                <span
                  className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Low"
                      ? "bg-rose-50 text-rose-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {item.status} Stock
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.4fr]">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Add Transaction
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Record incoming and outgoing stock movement.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Input
                  label="Product ID"
                  name="productId"
                  value={form.productId}
                  onChange={handleChange}
                  placeholder="Enter product ID"
                  error={errors.productId}
                />
                {errors.productId && (
                  <p className="mt-1 text-sm text-red-500">{errors.productId}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-slate-700">Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="IN">IN</option>
                  <option value="OUT">OUT</option>
                </select>
              </div>

              <div>
                <Input
                  label="Quantity"
                  name="quantity"
                  type="number"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  error={errors.quantity}
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-500">{errors.quantity}</p>
                )}
              </div>

              <div>
                <Input
                  label="Remarks"
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                  placeholder="Enter remarks"
                  error={errors.remarks}
                />
                {errors.remarks && (
                  <p className="mt-1 text-sm text-red-500">{errors.remarks}</p>
                )}
              </div>

              <Button text="Save Transaction" type="submit" fullWidth={false} />
            </form>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Transaction History
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Recent stock movement records
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="px-4 py-3 font-semibold">Product ID</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Quantity</th>
                    <th className="px-4 py-3 font-semibold">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transactions.map((transaction, index) => (
                    <tr
                      key={`${transaction.productId}-${index}`}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-4 py-4 font-medium text-slate-800">
                        {transaction.productId}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            transaction.type === "IN"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {transaction.quantity}
                      </td>
                      <td className="px-4 py-4 text-slate-600">
                        {transaction.remarks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
