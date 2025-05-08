import React from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignUpForm, SignUpFormData } from "@/components/auth/SignUpForm";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const handleSignUp = (formData: SignUpFormData) => {
    console.log("Form submitted:", formData);
    // Implement sign-up logic here
    // On success, redirect to dashboard or show success message
  };

  const handleLogin = () => {
    // Redirect to login page
    console.log("Redirecting to login page");
    // navigate("/login");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      />
      <AuthLayout 
        title="Olá, Startup!"
        subtitle="Bem vindo de volta!<br />Acesse sua conta"
        actionButton={{
          text: "Entrar",
          onClick: handleLogin
        }}
      >
        <SignUpForm onSubmit={handleSignUp} />
      </AuthLayout>
    </>
  );
}
