import React from 'react'

interface CounterProps {
  value: number;
  maxValue: number;

  onDecrease (): void;

  onIncrease (): void;
}

function Counter ({ value, maxValue, onIncrease, onDecrease }: CounterProps) {
  const htmlInputClasses = 'w-10 text-center bg-white border rounded-sm text-xs p-1'
  const htmlButtonClasses = 'border py-1 px-3 text-xs rounded-sm'
  const htmlButtonSuccessClasses = `${htmlButtonClasses} bg-blue-100 border-blue-100 text-blue-500`
  const htmlButtonDisabledClasses = `${htmlButtonClasses} bg-gray-100 border-gray-100 text-gray-500`

  return (
    <div className={'flex items-center space-x-2'}>
      <button
        className={value > 1 ? htmlButtonSuccessClasses : htmlButtonDisabledClasses}
        type="button" onClick={onDecrease}
      >
        -
      </button>
      <input type="number" value={value} disabled={true} className={htmlInputClasses}/>
      <button
        className={value < maxValue ? htmlButtonSuccessClasses : htmlButtonDisabledClasses}
        type="button" onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default Counter
