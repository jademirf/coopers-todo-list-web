import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useCustomEventListener } from 'react-custom-events'
import { Button } from '../components/Button'
import { ListCard } from '../components/ListCard'
import { ListItem } from '../components/ListItem'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import Head from 'next/head'
import { CardGoodThings } from '../components/CardGoodThings'
import { CarouselCards } from '../components/CarouselCards'
import { Header } from '../components/Header'


export default function Home() {
  const doneItems = [
    {
      id: '1',
      title: 'Get FTP credentials',
      done: true
    },
    {
      id: '2',
      title: 'Home Page Design',
      done: true
    },
    {
      id: '3',
      title: 'E-mail John about the deadline',
      done: true
    },
    {
      id: '4',
      title: 'Create a Google Drive folder',
      done: true
    },
    {
      id: '5',
      title: 'Send a gift to the client',
      done: true
    },
  ]

  const todoItems = [
    {
      id: '1',
      title: 'Develop the To-do list page',
      done: false
    },
    {
      id: '2',
      title: 'Create the drag-and-drop function',
      done: false
    },
    {
      id: '3',
      title: 'Add new tasks',
      done: false
    },
    {
      id: '4',
      title: 'Delete itens',
      done: false
    },
    {
      id: '5',
      title: 'Erase all',
      done: false
    },
    {
      id: '6',
      title: 'Checked item goes to Done list',
      done: false
    },
    {
      id: '7',
      title: 'This item label may be edited',
      done: false
    },
  ]

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
        <section id="todo-list">
          <header className="text-center before:-z-10 pt-[85px] pb-[96px] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative block">
            <h2 className="text-[50px] md:text-[60px] text-white font-['Poppins'] font-semibold leading-[60px]">To-do List</h2>
            <hr className="w-[250px] md:w-[297px] mx-auto border-green-500 border-2" />
            <p className="w-full md:w-[600px] mx-auto mt-4 md:mt-8 text-white font-semibold text-[14px] md:text-[24px]">Drag and drop to set your main priorities, check when done and create what´s new.</p>
          </header>
          <div id="todo-screenshots" className="flex flex-wrap gap-4 justify-center items-start mt-10 md:mt-[80px] bg-white bg-[url('/bg-todo-section.png')] bg-no-repeat bg-left">
            <ListCard
              title="To-do"
              message="Take a breath. Start doing."
              color="bg-green-500"
              allowNew
              items={todoItems}
            >
              <ListItem title="Editing an item..." done={false} extraClasses="text-orange-500" id="123" />
            </ListCard>
            <ListCard
              title="Done"
              message="Congratulions!"
              count={5}
              color="bg-orange-500"
              items={doneItems}
            />
          </div>
        </section>
        <section
          id="good-things"
          className="flex flex-col w-full lg:w-[1440px] mx-auto mt-[68px] h-[600px] lg:h-[720px] text-left"
        >
          <div className="bg-green-500 rounded-xl lg:w-[1080px] h-[450px] lg:h-[550px] lg:mx-auto pb-5 lg:pl-[68px]">
            <div className="flex w-[330px] lg:w-[1000px] flex-col absolute mt-10 lg:mt-20" >
              <header className="text-white pl-4 lg:pl-3 font-bold text-[30px] lg:text-[48px]">good things</header>
              <div className="w-full mt-5 lg:mt-10 pl-1 lg:pl-0 pb-5 flex items-center lg:items-start">
                <CarouselCards />
              </div>
            </div>
          </div>
          
        </section>
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
