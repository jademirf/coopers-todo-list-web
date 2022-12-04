import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useCustomEventListener } from 'react-custom-events'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import Head from 'next/head'
import { Header } from '../components/Header'
import { TodoListSection } from '../components/TodoListSection'
import { GoodThingsSection } from '../components/GoodThingsSection'


export default function Home() {
  

  const [openDialog, setOpenDialog] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const userInput = useRef(null)
  const userName = useRef(null)

  useCustomEventListener('open-dialog', () => {
    setOpenDialog(true)
  })
  return (
    <div className="flex flex-1 flex-col max-w-[1440px] mx-auto">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Transition.Root show={openDialog} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={userInput} onClose={setOpenDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:min-h-[320px] sm:mx-2 sm:max-w-[932px]"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-right">
                      <button className="bg-white font-bold text-[20px]"  onClick={() => setOpenDialog(false)}>close</button>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="sm:ml-[52px] hidden sm:block h-12 w-18 items-center justify-center sm:h-10 ">
                        <Image src="/bg-modal.svg" alt="Woman pointing to up right" width={231} height={231} />
                      </div>
                      {
                        !isSignUp ?
                        <SignIn
                          handleSignUpBtn={() => setIsSignUp(true)}
                          reference={userName}
                          handleSignIn={() => {
                            setIsSignUp(false)
                          }} 
                        /> :
                        <SignUp
                          handleSignInBtn={() => setIsSignUp(false)}
                          reference={userName}
                          handleSignIn={() => {
                            setIsSignUp(false)
                          }} 
                        />
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Header />
      <main className="px-1 flex flex-1 flex-col text-center">        
        <TodoListSection />
        <GoodThingsSection />
        <section id="contact">
          Contact
        </section>
      </main>
      <footer className="w-full mt-20">
        <div className="text-center h-full text-gray-500 before:-z-10 pt-[85px] before:block before:relative before:inset-1 before:-skew-y-3 before:bg-black relative block">
          footer
        </div>
      </footer>
    </div>
  )
}
