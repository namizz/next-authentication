"use client";

interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}
const Button = ({ name, onClick, type, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      className={`rounded-full border text-center py-2 w-full bg-indigo-900  text-white font-bold ${
        disabled && "bg-indigo-300"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
