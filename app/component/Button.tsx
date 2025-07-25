"use client";

interface ButtonProps {
  name: string;
  onClick: () => void;
}
const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className="rounded-full border text-center p-2" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
