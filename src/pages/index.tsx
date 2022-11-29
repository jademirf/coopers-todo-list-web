import Image from 'next/image'

export default function Home() {

  return (
    <div className="bg-green-200 flex flex-1 flex-col max-w-[1440px] mx-auto">
      <header className="flex flex-col pt-6 bg-none md:bg-[url('/bg-hero.png')] md:bg-no-repeat md:bg-right">
        <div id="main-header" className="flex justify-between w-full px-1 mx-auto max-w-[1280px]">
          <Image src="/logo-coopers.svg" alt="logo with coopers text and a green left angular bracket" width={217} height={51} />
          <button className="bg-black text-white w-[120px] h-10 font-['Poppins'] text-sm leading-[21px] pt-[9px] pb-[10px] pl-10 pr-[35px]">entrar</button>
        </div>

        <div id="hero" className="flex justify-between w-full px-1 mx-auto max-w-[1280px] mt-[52px]">
          <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left">
            <p className="font-bold leading-[64px] text-[60px] md:text-[80px]">Organize</p>
            <p className="font-regular leading-[44px] md:leading-[64px] text-[40px] md:text-[60px] text-green-500">your daily jobs</p>
            <p className="font-semibold text-xl md:text-2xl leading-6 mt-7 md:mt-14">the only way to get things done</p>
            <button>Go to To-do list</button>
          </div>
          <div id="hero-image" className="hidden md:block">
            <Image src="/hero-slide.png" alt="Room with 3 chairs and one television" width={443} height={481} />
          </div>
        </div>
      </header>
      <main >
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}
