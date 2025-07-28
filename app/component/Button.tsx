"use client";

interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
const Button = ({ name, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className="rounded-full border text-center py-2 w-full bg-indigo-900  text-white font-bold"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
