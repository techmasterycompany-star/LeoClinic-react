function AuthInput({
  label,
  type = "text",
  name,
  placeholder = "Hint text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm text-[#4B5563]">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          h-12
          rounded-full
          border border-[#D9DDE7]
          px-5
          text-sm
          text-[#4B5563]
          placeholder:text-[#A8AFBD]
          outline-none
          focus:border-[#1026B8]
          transition
        "
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default AuthInput;