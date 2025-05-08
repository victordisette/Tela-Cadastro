import React, { useState } from "react";
import { User, Building, HelpCircle, Lock } from "lucide-react";
import { FormInput } from "./FormInput";
import { SocialLoginButtons } from "./SocialLoginButtons";

interface SignUpFormProps {
  onSubmit: (formData: SignUpFormData) => void;
}

export interface SignUpFormData {
  fullName: string;
  startup: string;
  referral: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm({ onSubmit }: SignUpFormProps) {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    startup: "",
    referral: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-[137px] h-[46px] mb-[60px]"
      />
      <h1 className="text-[32px] font-bold text-[#309E4F] mb-10">
        Crie sua Conta
      </h1>
      
      <SocialLoginButtons onSocialLogin={handleSocialLogin} />
      
      <div className="text-[#666] text-center mb-10">
        ou use seu email para cadastrar
      </div>
      
      <div className="flex flex-col gap-5 max-w-[500px] w-full mx-auto">
        <FormInput
          icon={User}
          type="text"
          name="fullName"
          placeholder="Nome completo"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        
        <FormInput
          icon={Building}
          type="text"
          name="startup"
          placeholder="Sua startup"
          value={formData.startup}
          onChange={handleChange}
          required
        />
        
        <FormInput
          icon={HelpCircle}
          type="text"
          name="referral"
          placeholder="Por quem foi indicado?"
          value={formData.referral}
          onChange={handleChange}
        />
        
        <FormInput
          icon={Lock}
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <FormInput
          icon={Lock}
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <button 
          type="submit"
          className="w-full h-14 bg-[#309E4F] text-white font-bold text-base mt-5 rounded-[28px] hover:bg-[#277C30] transition-colors"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
