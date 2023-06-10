// import Image from 'next/image';
import Link from 'next/link'
import { About, Email, Github, Home, Linkedin } from '../../public'

const Sidebar = () => (

	<div className="sidebar-glow">
		<div id="Sidebar" className="flex flex-1 flex-col justify-center w-[var(--sidebar-width)] h-screen fixed darkmode-sidebar-gradient">
			<div className='mt-[5.5rem] tooltip tooltip-right' data-tip="Hi there!, this took a lot of effort to make so enjoy">
				<div className='-rotate-90 text-[#1A1A32] text-2xl font-bold font-[sans-serif]'>&lt;LeoLai/&gt;</div>
			</div>
			<ul id="sidebar-icons" className='self-center m-auto space-y-3 pb-[10rem]'>
				<li>
					<a href='./Home' className=''>
						<Home fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</a>
				</li>
				<li>
					<a href='./Email'>
						<Email fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</a>
				</li>
				<li>
					<a href='https://github.com/haelai77'>
						<Github fill="#1A1A32" width={32} height={32} className="justify-self-center" />
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/leo-j-lai/'>
						<Linkedin width={32} height={32} className="justify-self-center text-[#1A1A32]" />
					</a>
				</li>
			</ul>
			<a href='./About' className="self-center justify-end mb-1">
				<About fill="#1A1A32" width={32} height={32} />
			</a>
		</div>
	</div>


)

export default Sidebar