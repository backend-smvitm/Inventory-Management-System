import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import DashboardLayout from "../layouts/DashboardLayout";

const initialProducts = [
  {
    name: "Wireless Mouse",
    sku: "PRD-101",
    category: "Accessories",
    price: "899",
    supplier: "TechSource",
    minimumThreshold: "10",
    stock: 18,
  },
  {
    name: "Barcode Scanner",
    sku: "PRD-102",
    category: "Devices",
    price: "3499",
    supplier: "Retail Hub",
    minimumThreshold: "8",
    stock: 5,
  },
  {
    name: "Printer Ink Set",
    sku: "PRD-103",
    category: "Office Supplies",
    price: "1299",
    supplier: "Office Mart",
    minimumThreshold: "12",
    stock: 24,
  },
];

export default function Products() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
    supplier: "",
    minimumThreshold: "",
  });
  const [errors, setErrors] = useState({});
  const [list, setList] = useState(initialProducts);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Product name required";
    if (!form.sku.trim()) err.sku = "SKU required";
    if (!form.category.trim()) err.category = "Category required";
    if (!form.price || isNaN(form.price) || Number(form.price) < 0) {
      err.price = "Valid price required";
    }
    if (!form.supplier.trim()) err.supplier = "Supplier required";
    if (
      !form.minimumThreshold ||
      isNaN(form.minimumThreshold) ||
      Number(form.minimumThreshold) < 0
    ) {
      err.minimumThreshold = "Valid minimum threshold required";
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const clearForm = () => {
    setForm({
      name: "",
      sku: "",
      category: "",
      price: "",
      supplier: "",
      minimumThreshold: "",
    });
    setEditingIndex(-1);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    if (editingIndex >= 0) {
      const updated = [...list];
      updated[editingIndex] = {
        ...updated[editingIndex],
        ...form,
      };
      setList(updated);
    } else {
      setList([
        ...list,
        {
          ...form,
          stock: Number(form.minimumThreshold) + 5,
        },
      ]);
    }

    clearForm();
  };

  const handleEdit = (idx) => {
    const selectedProduct = list[idx];
    setForm({
      name: selectedProduct.name,
      sku: selectedProduct.sku,
      category: selectedProduct.category,
      price: selectedProduct.price,
      supplier: selectedProduct.supplier,
      minimumThreshold: selectedProduct.minimumThreshold,
    });
    setEditingIndex(idx);
  };

  const handleDelete = (idx) => {
    setList(list.filter((_, i) => i !== idx));
    if (editingIndex === idx) clearForm();
  };

  const filteredProducts = list.filter((product) => {
    const query = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Product Management
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add, update, and browse product records in one place.
              </p>
            </div>
            <div className="w-full max-w-md">
              <Input
                label="Search Products"
                placeholder="Search by name, SKU, or category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <Input
                  label="Product Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  error={errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  label="SKU"
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  placeholder="Enter SKU code"
                  error={errors.sku}
                />
                {errors.sku && (
                  <p className="mt-1 text-sm text-red-500">{errors.sku}</p>
                )}
              </div>
              <div>
                <Input
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Enter category"
                  error={errors.category}
                />
                {errors.category && (
                  <p className="mt-1 text-sm text-red-500">{errors.category}</p>
                )}
              </div>
              <div>
                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  error={errors.price}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-500">{errors.price}</p>
                )}
              </div>
              <div>
                <Input
                  label="Supplier"
                  name="supplier"
                  value={form.supplier}
                  onChange={handleChange}
                  placeholder="Enter supplier name"
                  error={errors.supplier}
                />
                {errors.supplier && (
                  <p className="mt-1 text-sm text-red-500">{errors.supplier}</p>
                )}
              </div>
              <div>
                <Input
                  label="Minimum Threshold"
                  name="minimumThreshold"
                  type="number"
                  value={form.minimumThreshold}
                  onChange={handleChange}
                  placeholder="Enter minimum stock level"
                  error={errors.minimumThreshold}
                />
                {errors.minimumThreshold && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.minimumThreshold}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                text={editingIndex >= 0 ? "Update Product" : "Add Product"}
                type="submit"
                fullWidth={false}
              />
              <Button
                text="Clear"
                type="button"
                onClick={clearForm}
                variant="secondary"
                fullWidth={false}
              />
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Product List</h3>
              <p className="text-sm text-slate-500">
                Showing {filteredProducts.length} of {list.length} products
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">SKU</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Stock</th>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => {
                  const originalIndex = list.findIndex(
                    (item) => item.sku === product.sku
                  );

                  return (
                    <tr key={product.sku} className="hover:bg-slate-50">
                      <td className="px-4 py-4">
                        <div>
                          <p className="font-medium text-slate-800">
                            {product.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            Supplier: {product.supplier}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-slate-600">{product.sku}</td>
                      <td className="px-4 py-4 text-slate-600">
                        {product.category}
                      </td>
                      <td className="px-4 py-4 font-medium text-slate-800">
                        Rs. {product.price}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            product.stock <= Number(product.minimumThreshold)
                              ? "bg-rose-50 text-rose-600"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          {product.stock} units
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Button
                            text="Edit"
                            onClick={() => handleEdit(originalIndex)}
                            variant="warning"
                            fullWidth={false}
                            className="px-3 py-2"
                          />
                          <Button
                            text="Delete"
                            onClick={() => handleDelete(originalIndex)}
                            variant="danger"
                            fullWidth={false}
                            className="px-3 py-2"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                      No products found for your current search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
