import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  glowOnHover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-2xl p-6 glass-card ${glowOnHover ? 'hover:border-blue-500/30' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
