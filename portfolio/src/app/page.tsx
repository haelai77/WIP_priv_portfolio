"use client"
import { useEffect } from "react"
import { TimeGate } from "../../public";

export default function Home() {

	useEffect(() => {
		const all = document.querySelectorAll('.wobble');
		// Iterate through each "wobble"
		all.forEach(el => {
			// Get the text content of the element// Create an array of separate letters
			let text = el.textContent!.split("");

			// Iterate through each letter and give it its own span element and individual animation delay offset
			const textCode = text.map((x, idx) => {
				let delay = (idx + 1) * 50;
				return `<span style="animation-delay: ${delay}ms">${x}</span>`;
			})
			// replace the element's html with our dynamically created html
			el.innerHTML = textCode.join("");
		});
	})

	return (
		<div className="px-[5rem] pt-[2rem] flex flex-col select-none">
			<p>Hi, my name is...</p>
			<h1 className="wobble text-5xl text-inherit py-[0.25rem] font-semibold ml-[-0.3srem] z-[0]">
				Leo_Lai
			</h1>
			<p className="max-w-4xl mt-[1rem]">
				I am a third-year computer science student pursuing an MEng at the <a className="text-secondaryLight underline" href="https://www.bristol.ac.uk/">TheUniversityOfBristol</a>.
				I've had hands-on experience with building web-apps and data analysis, now I'm excited about my future career options!
				I'm currently looking forward to roles in AI/ML engineering, data science or software engineering.🚀
			</p>

			<div className="ml-[1rem] pb-[1.5rem]">
				<div className="arrow">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<p>Check out my...</p>

			<h1 className="text-5xl text-inherit my-[0.7rem] font-semibold ml-[-0.3srem]">
				Skills & Projects
			</h1>

			<div className="carousel w-[20rem] py-[1rem] rounded bg-white">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={TimeGate.src} className="w-full"/>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">❮</a>
						<a href="#slide2" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src={TimeGate.src} className="w-full" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">❮</a>
						<a href="#slide3" className="btn btn-circle">❯</a>
					</div>
				</div>

			</div>
		</div>
	)
}