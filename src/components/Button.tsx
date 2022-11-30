
interface ButtonProps {
  text: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export const Button = ({text, type = 'PRIMARY', ...rest}: ButtonProps) => {
  const bgColor = type === 'PRIMARY' ? 'green-500' : 'black'
  return (
    <button
      className={`bg-${bgColor} font-semibold leading-[29px] mt-7 md:mt-11 text-white text-2xl w-[300px] h-16 rounded-[10px]`}
      {...rest}
    >{text}</button>
  )
}