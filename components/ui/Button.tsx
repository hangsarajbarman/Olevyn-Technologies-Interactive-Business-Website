import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'hero';
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-white text-black hover:bg-cyan-50 focus:ring-white",
    secondary: "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus:ring-white/50",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/50 focus:ring-white/50",
    hero: "bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 focus:ring-cyan-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};

export default Button;