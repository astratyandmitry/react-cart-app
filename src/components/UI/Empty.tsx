import React from 'react'

interface EmptyProps {
  children: any;
}

function Empty ({ children }: EmptyProps) {
  return (
    <div className={'bg-gray-900 text-center text-gray-400 p-8 mb-8 rounded'}>
      {children}
    </div>
  )
}

export default Empty
