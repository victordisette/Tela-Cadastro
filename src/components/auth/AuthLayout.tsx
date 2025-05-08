import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actionButton?: {
    text: string;
    onClick: () => void;
  };
}

export function AuthLayout({ children, title, subtitle, actionButton }: AuthLayoutProps) {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[67%] bg-white flex flex-col p-[30px] max-md:w-full">
        {children}
      </div>
      <div className="w-[33%] bg-[#309E4F] flex flex-col items-center justify-center text-white max-md:hidden">
        <div className="text-[64px] font-bold mb-[60px]">{title}</div>
        {subtitle && (
          <div className="text-[32px] text-center mb-[60px]" dangerouslySetInnerHTML={{ __html: subtitle }} />
        )}
        {actionButton && (
          <button 
            className="w-[270px] h-[73px] border font-bold text-2xl rounded-[30px] border-white"
            onClick={actionButton.onClick}
          >
            {actionButton.text}
          </button>
        )}
      </div>
    </div>
  );
}
