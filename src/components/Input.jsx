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
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {/* error display is handled by parent */}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 ${
                     error ? "border-red-500" : "border-gray-300"
                   } ${className}`}
        {...props}
      />
    </div>
  );
}