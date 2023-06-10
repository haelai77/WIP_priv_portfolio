"use client"
import LightSwitch from "./Switch"

const Navbar = () => (
  <div id="Navbar" className="navbar nav-gradient-anim bg-primary text-primary-content z-20">
    <div className="mr-auto space-x-8 pl-5">
      <a className="btn btn-ghost normal-case text-xl" href="/contact">Contact</a>
      <a className="btn btn-ghost normal-case text-xl" href="/blog">Blog</a>
      <a className="btn btn-ghost normal-case text-xl" href="/hiring">Hiring?</a>
      <a className="btn btn-ghost normal-case text-xl" href="/skills_projects">Skills & Projects</a>
      <a className="btn btn-ghost normal-case text-xl" href="/guestbook">Guest book</a>
      <a className="btn btn-ghost normal-case text-xl" href="/cv">CV</a>
    </div>

    <div className="justify-end">
      <LightSwitch />
    </div>

  </div>
)

export default Navbar