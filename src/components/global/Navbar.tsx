"use client"
import Image from "next/image";
import ThemeChangeButton from "./ThemeChangeButton";
import { useState } from "react";
import { navbarLinks, socialLinks } from "@/utils/constants";
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	return <header>
		<nav className="fixed overflow-hidden z-20 w-full bg-white/80 rounded-b-lg border-b border-neutral-500/20 border-x backdrop-blur-lg">
			<div className="px-6 m-auto max-w-6xl 2xl:px-0">
				<div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
					<div className="w-full items-center flex justify-between lg:w-auto">
						<a href="/" className="flex gap-2 items-center text-lg text-gray-900" aria-label="AttaXpert logo">
							<Image width={30} height={30} src="/images/personal/logo.png" alt="logo"/> AttaXpert
							{/* <Badge>BETA</Badge> */}
						</a>
						<div className="flex lg:hidden">
							<button
								onClick={() =>setIsOpen(!isOpen)}
								aria-label="humburger"
								id="menu"
								className="relative border bordeer-gray-950/30 size-9 rounded-full transition duration-300 active:scale-95"
							>
								<div
									aria-hidden="true"
									id="line1"
									className="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300" />
								<div
									aria-hidden="true"
									id="line2"
									className="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300" />
							</button>
						</div>
					</div>
					<div className={`w-full ${isOpen? 'h-full' : 'h-0'} lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap`}>
						<div className="mt-6 text-gray-600 md:-ml-4 lg:pr-4 lg:mt-0">
							<ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex capitalize lg:space-y-0">
								{
									navbarLinks.map((link, index) => (
										<li key={index}>
											<a href={link.url} className="block md:px-4 transition hover:text-primary-600">
												<span>{link.title}</span>
											</a>
										</li>
									))
								}
							</ul>
						</div>
						<div className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-neutral-500/20 items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
							<a href={socialLinks['instagram'].link} target="_blank" className="w-full h-9 lg:w-fit group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
								<span>Instagram</span>
							</a>
							<a href={socialLinks['whatsapp'].link} target="_blank" className="w-full duration-100 h-9 lg:w-fit group flex items-center relative border rounded-full *:select-none [&>*:not(.sr-only)]:relative before:rounded-full before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparentdark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950  lg:text-sm lg:h-8 px-3 justify-center">
								<span>WhatsApp</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
}