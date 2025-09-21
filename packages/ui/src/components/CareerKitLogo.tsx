import React from 'react'
import { FileText } from 'lucide-react'

interface CareerKitLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export const CareerKitLogo: React.FC<CareerKitLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} careerkit-gradient rounded-lg flex items-center justify-center`}>
        <FileText className={`${iconSizes[size]} text-white`} />
      </div>
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold careerkit-gradient bg-clip-text text-transparent`}>
            CareerKit
          </h1>
          <p className="text-xs text-muted-foreground">Identity Forge</p>
        </div>
      )}
    </div>
  )
}

export default CareerKitLogo

