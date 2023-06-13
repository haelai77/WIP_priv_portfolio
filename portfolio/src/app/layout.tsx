import './globals.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export const metadata = {
  title: "God of Procrastination's portfolio",
  description: "Created by Leo Lai",
  keywords: [
      "Next.js",
      "React",
      "TypeScript"
  ],
  authors: [
      {
          name: "Leo Jack Lai",
          url: "https://github.com/haelai77"
      }
  ],
  creator: "Leo Jack Lai",
  publisher: "Leo Jack Lai"
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" >
      

      <body suppressHydrationWarning={true}>

        <div className="fixed w-[calc(100%-var(--sidebar-width))] ml-[var(--sidebar-width)] top-0"><Navbar /></div>
        <div className="fixed top-0 left-0"><Sidebar /></div>

        <main className='ml-[3rem] mt-[4rem] h-[calc(100vh-4rem)] w-[calc(100vw-var(--sidebar-width))]'> {/* pt-[7rem] px-[7rem]*/}
          { children }
        </main>

      </body>
    </html>
  )
}
