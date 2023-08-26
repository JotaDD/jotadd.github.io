type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button
    className="bg-j-blue-900 text-white px-4 py-2 rounded-md hover:bg-j-blue-800 transition-colors duration-200"
    {...props}
    >
      {children}
    </button>
  )
}
export default Button