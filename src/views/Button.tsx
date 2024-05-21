const Button = ({ text, className }: { text: string; className?: string }) => {
  const baseStyle =
    'bg-orange-500 text-white text-sm px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform'
  const hoverStyle = 'hover:bg-orange-600'
  const focusStyle =
    'focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50'
  const activeStyle = 'active:bg-orange-700'

  return (
    <button
      className={`${baseStyle} ${hoverStyle} ${focusStyle} ${activeStyle} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
