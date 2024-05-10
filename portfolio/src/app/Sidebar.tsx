"use client"
import Link from 'next/link'
import { About, Email, Github, Home, Linkedin } from '../../public'

const Sidebar = () => (

	<div className="sidebar-glow z-20">
		<div id="Sidebar" className="flex flex-1 flex-col justify-center w-[var(--sidebar-width)] h-screen darkmode-sidebar-gradient">

			<div className='mt-[5.5rem] tooltip tooltip-right cursor-pointer' data-tip="Hi there! this took a lot of effort to make so I hope you enjoy looking around!">
				<div className='-rotate-90 text-[#1A1A32] text-2xl font-bold font-[sans-serif]'>&lt;LeoLai/&gt;</div>
			</div>
			<ul id="sidebar-icons" className='self-center m-auto space-y-8 pb-[10rem]'>
				<li>
					<Link href='/' className='tooltip tooltip-right' data-tip="Wanna go back home?">
						<Home fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</Link>
				</li>
				<li>
				<Link href='/Email' className='my-[-8px] tooltip tooltip-right' data-tip="Send me some mail!">
						<Email fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</Link>
				</li>
				<li>
					<Link href='https://github.com/haelai77' className='tooltip tooltip-right animate-spin-slow hover:animate-none' data-tip="Follow me on Github?">
						<Github fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</Link>
				</li>
				<li>
					<Link href='https://www.linkedin.com/in/leo-j-lai/' className='tooltip tooltip-right' data-tip="Send me a job offer!">
						<Linkedin width={32} height={32} className="justify-self-center text-[#1A1A32]" />
					</Link>
				</li>
			</ul>
			<Link href='/About' className="self-center justify-end mb-1 tooltip tooltip-right" data-tip="Made with Nextjs13, using tailwind, headlessUi and daisyUi.">
				<About fill="#1A1A32" width={32} height={32} />
			</Link>
		</div>
	</div>


)

export default Sidebar