import { Dialog } from "@headlessui/react"


export const SignIn = ({handleSignIn, handleSignUpBtn, reference}) => {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
      {/* <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left"> */}
        <p className="font-bold leading-[44px] sm:pt-[45px] lg:leading-[64px] text-[48px] lg:text-[80px]">Sign in</p>
                          <p className="leading-[32px] lg:leading-[64px] lg:mt-2 text-[28px] lg:text-[48px] text-green-500">to access your list</p>
      </Dialog.Title>
      <div className="mt-5 md:mt-[84px]">
      <form className="flex md:w-[342px] flex-col font-semibold text-[24px]">
        <label htmlFor="email">User:</label>
        <input type="email" id="email" name="email" className="rounded" placeholder="user@mail.com" ref={reference} />
        <label htmlFor="password" className="mt-[30px]">Password:</label>
        <input type="password" id="password" name="password" className="rounded" />
        <button
          type="button"
          className="font-semibold mx-auto mt-8 md:mt-14 leading-[29px] text-white text-2xl w-[300px] h-16 bg-green-500"
          onClick={handleSignIn}
        >
          Sign in
        </button>
      </form>
      <p className="text-sm md:w-[342px] mt-5 mb-3 text-center">
        Don&apos;t have an account? please
        <button
          className="text-green-500 font-semibold underline ml-1"
          onClick={handleSignUpBtn}
        >
          Sign up
        </button>.
      </p>
      </div>
    </div>
  )
} 