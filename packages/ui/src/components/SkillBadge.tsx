import React from 'react'
import { X } from 'lucide-react'

interface SkillBadgeProps {
  skill: string
  removable?: boolean
  onRemove?: (skill: string) => void
  variant?: 'default' | 'interactive' | 'static'
  className?: string
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  removable = false,
  onRemove,
  variant = 'default',
  className = ''
}) => {
  const baseClasses = "skill-badge inline-flex items-center space-x-2"
  const variantClasses = {
    default: "skill-badge",
    interactive: "skill-badge cursor-pointer hover:scale-105",
    static: "px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <span>{skill}</span>
      {removable && onRemove && (
        <button
          onClick={() => onRemove(skill)}
          className="text-red-400 hover:text-red-300 transition-colors"
          aria-label={`Remove ${skill}`}
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}

export default SkillBadge

