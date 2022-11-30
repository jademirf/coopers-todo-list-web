import Image from 'next/image'
import { ListItem, ItemProps } from './ListItem';



interface TodoCardProps {
  title: string;
  message: string;
  count?: number;
  color: string;
  items: Array<ItemProps>;
  children: React.ReactElement;
}

export const ListCard = (props: TodoCardProps) => {
  return (
    <div className="flex flex-col w-[380px] max-w-[380px] shadow-lg bg-white">
      <div className={`h-5 w-full bg-${props.color}`}></div>
      <section id="card-content" className="text-2xl flex flex-col items-center mb-[30px]">
        <header className="w-full px-[23px] mb-[30px] flex flex-col items-center">
          <h3 className="font-bold text-[40px] leading-6 mt-10 mb-5">{props.title}</h3>
          <p id="message" className="w-[180px]">{props.message}</p>
          {
            props.count ? (<p><strong>You have done {props.count} tasks</strong></p>) : null
          }
        </header>
        <div id="itens-list" className="w-full px-[23px]">
          <ul>
            {
              props.items.map((item: ItemProps) => {
                return <ListItem key={item.id} title={item.title} done={false} id={item.id} />
              })
            }
          </ul>
        </div>
      </section>

    </div>
  )
}