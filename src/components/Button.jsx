const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  danger: "bg-red-500 text-white hover:bg-red-600",
  warning: "bg-amber-500 text-white hover:bg-amber-600",
  success: "bg-emerald-500 text-white hover:bg-emerald-600",
};

export default function Button({
  text,
  children,
  onClick,
  type = "button",
  className = "",
  fullWidth = true,
  variant = "primary",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${fullWidth ? "w-full" : "w-auto"} rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
    >
      {children || text}
    </button>
  );
}
