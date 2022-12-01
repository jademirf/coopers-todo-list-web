
interface ButtonProps {
  text: string;
  type?: 'PRIMARY' | 'SECONDARY';
  extraClasses: string;
}

export const Button = ({text, type = 'PRIMARY', extraClasses, ...rest}: ButtonProps) => {
  const bgColor = type === 'PRIMARY' ? 'green-500' : 'black'
  return (
    <button
      className={`bg-${bgColor} font-semibold leading-[29px] text-white text-2xl w-[300px] h-16 rounded-[10px] ${extraClasses}`}
      {...rest}
    >{text}</button>
  )
}