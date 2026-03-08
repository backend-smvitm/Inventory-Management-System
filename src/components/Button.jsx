export default function Button({ text, onClick, type = "button", className = "", fullWidth = true }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${fullWidth ? "w-full" : ""} px-4 py-2 bg-blue-600 text-white rounded-lg 
                 hover:bg-blue-700 transition duration-200 
                 font-medium ${className}`
    >
      {text}
    </button>
  );
}