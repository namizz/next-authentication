import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  label: string;
  ph: string;
  register?: UseFormRegisterReturn;
  error?: string;
}
const InputBox = ({ label, ph, register, error }: InputProps) => {
  return (
    <div className="flex flex-col border p-2 ">
      <label htmlFor="input">{label}</label>
      <input
        {...register}
        name="input"
        className={`border p-2 rounded-md border-gray-300 ${
          error ? "border-red-500" : ""
        }`}
        placeholder={ph}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputBox;
