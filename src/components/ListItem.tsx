import Image from 'next/image'

export interface ItemProps {
  title: string;
  done: boolean;
  id: string;
  extraClasses: string;
}

export const ListItem = ({title, done = false, extraClasses}: ItemProps) =>{
  return (
    <li className={`flex gap-4 mb-5 text-left ${extraClasses}`}>
      <div>
        <button><Image src="/icon-unchecked.svg" alt="orange unchecked option" width={24} height={24} /></button>
      </div>
      <div className="text-[16px] leading-6">{title}</div>
    </li>
  )
}