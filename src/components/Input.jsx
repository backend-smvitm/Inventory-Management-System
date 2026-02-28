export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
}