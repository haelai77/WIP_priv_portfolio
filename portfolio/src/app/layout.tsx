"use client"
import { Suspense } from 'react'
import './globals.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ModalLoading from './ModalLoading'
import { useState } from 'react'

//head
// export const metadata = {
//   title: "God of Procrastination's portfolio",
//   description: "Created by Leo Lai",
//   keywords: [
//       "Next.js",
//       "React",
//       "TypeScript"
//   ],
//   authors: [
//       {
//           name: "Leo Jack Lai",
//           url: "https://github.com/haelai77"
//       }
//   ],
//   creator: "Leo Jack Lai",
//   publisher: "Leo Jack Lai"
// }

export default function RootLayout({children,}: {children: React.ReactNode}) { //ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean
  const [homeLoaded, setHomeLoaded] = useState(false)
  const handelHomeLoad = () => setHomeLoaded(!homeLoaded);
  const msg = `Some pages are still work in progress:
              + not suitable for mobile or other media devices 😬
              + refactor side bar code 😬
              + fill in rest of pages 😬
              `;
  const modalTitle = "WARNING (W.I.P) 🦕";
  const link = "https://media.giphy.com/media/PdpT9kNlBtV3Nqlmbg/giphy.gif"

  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <div className="fixed w-[calc(100%-var(--sidebar-width))] ml-[var(--sidebar-width)] top-0"><Navbar /></div>
        <div className="fixed top-0 left-0"><Sidebar /></div>

        <main className='ml-[3rem] mt-[4rem] h-[calc(100vh-4rem)] w-[calc(100vw-var(--sidebar-width))]'> {/* pt-[7rem] px-[7rem]*/}

          <ModalLoading homeLoaded={homeLoaded} modalTitle={modalTitle} msg={msg} link={link}/>
           <div className='w-full h-full text-white' onLoad={handelHomeLoad}>
            { children }
          </div>
          
        </main>

      </body>
    </html>
  )
}
