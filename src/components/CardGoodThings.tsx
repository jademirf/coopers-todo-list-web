import Image from 'next/image'


export const CardGoodThings = () => {
  return (
    <div
      className="max-w-full md:max-w-sm bg-white border w-[340px] md:w-[360px] h-[430px] border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <Image className="rounded-t-lg" src="/img-card-1.jpg" width={360} height={200} alt="Card Header image" />
      <section className="px-8 pb-5 h-[230px]">
        <div className="w-full pt-6 text-gray-500 text-[16px]">
          <a
            href="#"
            className="leading-[19.2px] inline-block px-[12px] py-[6px] border rounded-3xl border-gray-500"
            >
              function 
          </a>
        </div>
        <p className="mt-[22px] leading-[21.6px] mb-3 font-medium text-gray-700 dark:text-gray-400">Organize your daily job enhance your life performance</p>
        <div>
          <a href="#" className="inline-flex items-center py-2 text-[16px] font-bold text-center text-green-500 rounded-lg hover:text-green-400  focus:outline-none focus:ring-green-300">
              read more
          </a>
        </div>
      </section>
  </div>
  )
}