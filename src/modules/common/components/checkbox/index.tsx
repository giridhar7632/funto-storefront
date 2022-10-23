import React from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  return (
    <button
      className="text-base-regular flex items-center gap-x-2"
      role="checkbox"
      type="button"
      aria-checked={checked}
      onClick={onChange}
    >
      <div
        role="checkbox"
        aria-checked={checked}
        className="flex h-5 w-5 items-center justify-center border border-gray-900"
      >
        {checked ? "✓" : null}
      </div>
      <span>{label}</span>
    </button>
  )
}

export default Checkbox
