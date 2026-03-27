export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-slate-300"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
