import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import DashboardLayout from "../layouts/DashboardLayout";

const initialSuppliers = [
  {
    name: "TechSource",
    contactPerson: "Aman Verma",
    email: "aman@techsource.com",
    phone: "9876543210",
    address: "Bangalore, India",
  },
  {
    name: "Office Mart",
    contactPerson: "Priya Sharma",
    email: "priya@officemart.com",
    phone: "9123456780",
    address: "Mumbai, India",
  },
];

export default function Suppliers() {
  const [form, setForm] = useState({
    name: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
  });
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    Object.entries(form).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuppliers([...suppliers, { ...form }]);
    setForm({
      name: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
    });
    setErrors({});
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Suppliers</h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage vendor contact details for procurement and restocking.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <Input
                  label="Supplier Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter supplier name"
                  error={errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  label="Contact Person"
                  name="contactPerson"
                  value={form.contactPerson}
                  onChange={handleChange}
                  placeholder="Enter contact person"
                  error={errors.contactPerson}
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactPerson}
                  </p>
                )}
              </div>
              <div>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  error={errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  error={errors.phone}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <Input
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter supplier address"
                  error={errors.address}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                )}
              </div>
            </div>

            <Button text="Add Supplier" type="submit" fullWidth={false} />
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Supplier List</h3>
          <p className="mt-1 text-sm text-slate-500">
            {suppliers.length} supplier records available
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Contact Person</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {suppliers.map((supplier) => (
                  <tr
                    key={`${supplier.name}-${supplier.email}`}
                    className="hover:bg-slate-50"
                  >
                    <td className="px-4 py-4 font-medium text-slate-800">
                      {supplier.name}
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {supplier.contactPerson}
                    </td>
                    <td className="px-4 py-4 text-slate-600">{supplier.email}</td>
                    <td className="px-4 py-4 text-slate-600">{supplier.phone}</td>
                    <td className="px-4 py-4 text-slate-600">{supplier.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
