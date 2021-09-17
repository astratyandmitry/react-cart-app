import React from 'react'

interface ContainerProps {
  children: any;
  className?: string;
}

function Container ({ children, className }: ContainerProps) {
  return (
    <div className={`container mx-auto max-w-2xl px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
