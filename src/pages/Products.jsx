import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Products() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Product name required";
    if (!form.category.trim()) err.category = "Category required";
    if (!form.price || isNaN(form.price) || Number(form.price) < 0)
      err.price = "Valid price required";
    if (!form.quantity || isNaN(form.quantity) || Number(form.quantity) < 0)
      err.quantity = "Valid quantity required";
    return err;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setForm({ name: "", category: "", price: "", quantity: "" });
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
      updated[editingIndex] = form;
      setList(updated);
    } else {
      setList([...list, form]);
    }

    clearForm();
  };

  const handleEdit = (idx) => {
    setForm(list[idx]);
    setEditingIndex(idx);
  };

  const handleDelete = (idx) => {
    setList(list.filter((_, i) => i !== idx));
    if (editingIndex === idx) clearForm();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>

      <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              label="Product Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <Input
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              error={errors.category}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category}</p>
            )}
          </div>
          <div>
            <Input
              label="Price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              error={errors.price}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}
          </div>
          <div>
            <Input
              label="Quantity"
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              error={errors.quantity}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity}</p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button text={editingIndex >= 0 ? "Update" : "Add"} />
          <Button
            text="Cancel"
            type="button"
            onClick={clearForm}
            className="bg-gray-500 hover:bg-gray-600"
          />
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.category}</td>
                <td className="px-4 py-2">{p.price}</td>
                <td className="px-4 py-2">{p.quantity}</td>
                <td className="px-4 py-2 space-x-2">
                  <Button
                    text="Edit"
                    onClick={() => handleEdit(idx)}
                    className="bg-yellow-500 hover:bg-yellow-600"
                    fullWidth={false}
                  />
                  <Button
                    text="Delete"
                    onClick={() => handleDelete(idx)}
                    className="bg-red-500 hover:bg-red-600"
                    fullWidth={false}
                  />
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-gray-500 py-4"
                >
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
