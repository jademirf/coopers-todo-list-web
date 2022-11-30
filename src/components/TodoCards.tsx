
interface TodoCardProps {
  title: string;
  message: string;
  highlightText?: string;
  color: string;
  items: Array<{}>
}

export const TodoCard = (props: TodoCardProps) => {
  return (
    <div className="flex flex-col w-[380px] shadow-lg bg-white">
      <div id="color-bar" className={`h-5 w-full bg-${props.color} `}></div>
      <div id="card-content" className="text-2xl flex flex-col items-center">
        <h3 className="font-bold text-[40px] leading-6 mt-10 mb-5">{props.title}</h3>
        <p id="message" className="w-[180px]">{props.message}</p>
        {
          props.highlightText ? (<p id="message"><strong>{props.highlightText}</strong></p>) : null
        }
      </div>
    </div>
  )
}