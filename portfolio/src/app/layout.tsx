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
    <html lang="en">
      <body>

        <div className="fixed w-[calc(100%-var(--sidebar-width))]">
          <Navbar />
        </div>

        <Sidebar />

        <main className='px-[10rem] pt-[calc(4rem+6rem)]'>

        </main>
      </body>
    </html>
  )
}
