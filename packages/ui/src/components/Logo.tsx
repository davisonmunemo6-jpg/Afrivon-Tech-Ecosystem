import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  // Since we don't have an actual logo file, we'll create a simple text-based logo
  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#1A1B3A] font-bold rounded-lg flex items-center justify-center w-full h-full">
        A
      </div>
    </div>
  );
};

