import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-green-200 flex flex-1 flex-col px-2 py-4 max-w-[1440px] mx-auto">
      <header className="flex flex-col">
        <div id="main-header" className="flex justify-between w-full mx-auto max-w-[1280px]">
          <Image src="/logo-coopers.svg" alt="logo with coopers text and a green left angular bracket" width={217} height={51} />
          <button className="bg-black text-white w-[120px] h-10 font-['Poppins'] text-sm leading-[21px] pt-[9px] pb-[10px] pl-10 pr-[35px]">entrar</button>
        </div>

        <div id="hero" className="flex justify-between w-full mx-auto max-w-[1280px] mt-[52px]">
          <div id="call-to-action" className="md:mt-[52px]">
            <p className="font-bold leading-[64px] text-[60px] md:text-[80px]">Organize</p>
            <p className="font-regular leading-[44px] md:leading-[64px] text-[40px] md:text-[60px] text-green-500">your daily jobs</p>
            <p>the only way to get things done</p>
            <button>Go to To-do list</button>
          </div>
          <div id="hero-image" className="hidden md:block">
            <Image src="/logo-coopers.svg" alt="Vercel Logo" width={217} height={51} />
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
