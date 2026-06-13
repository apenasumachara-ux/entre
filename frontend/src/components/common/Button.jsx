import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      onClick,
      disabled = false,
      type = "button",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "px-4 py-2 rounded-md font-bold transition-all duration-300 focus:outline-none";

    const variants = {
      primary:
        "bg-amber-700 hover:bg-amber-800 text-white border-2 border-yellow-600 shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",

      secondary:
        "bg-slate-800 hover:bg-slate-700 text-yellow-50 border border-gray-600 shadow-md disabled:opacity-50 disabled:cursor-not-allowed",

      discord:
        "bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",

      github:
        "bg-gray-800 hover:bg-black text-white shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
    };

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;