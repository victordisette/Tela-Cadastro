import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";

interface SocialLoginButtonsProps {
  onSocialLogin: (provider: string) => void;
}

export function SocialLoginButtons({ onSocialLogin }: SocialLoginButtonsProps) {
  const socialButtons = [
    { icon: Facebook, provider: "facebook" },
    { icon: Mail, provider: "google" },
    { icon: Linkedin, provider: "linkedin" },
  ];

  return (
    <div className="flex justify-center gap-[30px] mb-10">
      {socialButtons.map(({ icon: Icon, provider }) => (
        <button
          key={provider}
          onClick={() => onSocialLogin(provider)}
          className="w-[73px] h-[73px] opacity-70 flex items-center justify-center rounded-full border-2 border-[#277C30] hover:opacity-100 transition-opacity"
          aria-label={`Sign in with ${provider}`}
        >
          <Icon className="h-6 w-6 text-[#277C30]" />
        </button>
      ))}
    </div>
  );
}
