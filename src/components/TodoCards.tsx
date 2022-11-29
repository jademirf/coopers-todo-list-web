
interface TodoCardProps {
  title: string;
  color: string;
  items: Array<{}>
}

export const TodoCard = (props: TodoCardProps) => {
  return (
    <div className="flex flex-col w-[380px] shadow-lg bg-white">
      <div id="color-bar" className="h-5 w-full bg-green-500"></div>
      <div id="card-content">
        <h3 className="font-bold text-[40px] leading-6 mt-10 mb-5">{props.title}</h3>
      </div>
    </div>
  )
}