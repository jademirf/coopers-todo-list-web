import Image from 'next/image'
import { FaSignInAlt } from 'react-icons/fa'

export default function Home() {

  return (
    <div className="flex flex-1 flex-col max-w-[1440px] mx-auto">
      <header className="flex flex-col pt-6 bg-none md:bg-[url('/bg-hero.png')] md:bg-no-repeat md:bg-right">
        <div id="main-header" className="flex justify-between w-full px-2 md:px-0 mx-auto max-w-[1280px]">
          <h1>
            <Image src="/logo-coopers.svg" alt="logo with coopers text and a green left angular bracket" width={217} height={51} />
          </h1>
          <button className="bg-black md:hidden text-white text-center rounded h-10 font-['Poppins'] text-md leading-[21px] px-4 pt-[5px] pb-[5px]">
            <FaSignInAlt />
          </button>
          <button className="bg-black hidden md:block text-white w-[120px] h-10 font-['Poppins'] text-sm leading-[21px] pt-[9px] pb-[10px] pl-10 pr-[35px]">entrar</button>
        </div>

        <div id="hero" className="flex justify-between w-full px-1 mx-auto max-w-[1280px] mt-[52px]">
          <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left">
            <p className="font-bold leading-[64px] text-[60px] md:text-[80px]">Organize</p>
            <p className="font-regular leading-[44px] md:leading-[64px] text-[40px] md:text-[60px] text-green-500">your daily jobs</p>
            <p className="font-semibold text-xl md:text-2xl leading-6 mt-7 md:mt-14">the only way to get things done</p>
            <button className="bg-green-500 font-semibold leading-[29px] mt-7 md:mt-11 text-white text-2xl w-[300px] h-16 rounded-[10px]">Go to To-do list</button>
          </div>
          <div id="hero-image" className="hidden md:block">
            <Image src="/hero-slide.png" alt="Room with 3 chairs and one television" width={443} height={481} />
          </div>
        </div>
        <div id="scroll-down" className="w-full flex justify-center mt-[45px] pb-[30px]">
          <Image src="/arrow-down.svg" alt="Gray arrow pointing down" width={30} height={18} />
        </div>
      </header>
      <main className="px-1 flex flex-col text-center">
        <section id="todo-list" className="text-center before:-z-10 pt-[85px] pb-[96px] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative block">
          <h2 className="text-[50px] md:text-[60px] text-white font-['Poppins'] font-semibold leading-[60px]">To-do List</h2>
          <hr className="w-[250px] md:w-[297px] mx-auto border-green-500 border-2" />
          <p className="w-full md:w-[600px] mx-auto mt-4 md:mt-8 text-white font-semibold text-[14px] md:text-[24px]">Drag and drop to set your main priorities, check when done and create what´s new.</p>
        </section>
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}
