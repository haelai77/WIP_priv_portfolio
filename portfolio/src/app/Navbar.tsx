"use client"
import LightSwitch from "./Switch"
import Link from 'next/link'

const Navbar = () => (
  <div id="Navbar" className="navbar max-h-16 nav-gradient-anim bg-primary text-primary-content z-20">

    <div className="m-auto bg-secondary rounded-lg bg-opacity-[0.1] whitespace-nowrap">
        <Link className="btn btn-ghost normal-case text-xl" href="/contact">Contact</Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/blog">Blog</Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/hiring">Hiring?</Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/skills_projects">Skills & Projects</Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/guestbook">Guest book</Link>
        <Link className="btn btn-ghost normal-case text-xl" href="/cv">CV</Link>
    </div>

    <div className="justify-end pr-[1rem]">
      <LightSwitch />
    </div>

  </div>
)

export default Navbar