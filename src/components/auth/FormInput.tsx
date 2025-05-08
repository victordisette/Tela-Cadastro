import React, { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
}

export function FormInput({ icon: Icon, ...props }: FormInputProps) {
  return (
    <div className="relative">
      <Icon className="absolute -translate-y-2/4 text-[#309E4F] left-5 top-2/4 h-5 w-5" />
      <input
        {...props}
        className="w-full h-14 border text-base pl-[50px] rounded-[28px] border-[#309E4F] focus:outline-none focus:ring-2 focus:ring-[#309E4F] focus:ring-opacity-50"
      />
    </div>
  );
}
