export const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "Suppliers", path: "/suppliers" },
  { label: "Inventory", path: "/inventory" },
];

const pageTitles = {
  "/dashboard": "Dashboard",
  "/products": "Product Management",
  "/categories": "Category Management",
  "/suppliers": "Supplier Management",
  "/inventory": "Inventory Management",
};

export function getPageTitle(pathname) {
  return pageTitles[pathname] || "Inventory Management System";
}
