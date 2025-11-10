import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-5 py-2 rounded-md font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';

  const variantClasses = {
    primary: 'bg-blue-800 text-white hover:bg-blue-700 focus:ring-blue-600',
    secondary: 'bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 focus:ring-slate-500',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;