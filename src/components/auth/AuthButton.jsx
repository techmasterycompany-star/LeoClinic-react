function AuthButton({
  children,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        h-12
        rounded-full
        bg-[#1026B8]
        text-white
        text-base
        font-medium
        hover:bg-[#0B1E9B]
        transition
        disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}

export default AuthButton;