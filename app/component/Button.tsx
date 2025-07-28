"use client";

interface ButtonProps {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-full border text-center py-2 w-full bg-indigo-900  text-white font-bold"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
