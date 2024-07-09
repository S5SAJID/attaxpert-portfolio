import { socialLinks } from '@/utils/constants';
import { Facebook, Instagram, Twitch, Youtube } from 'lucide-react'
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="text-gray-600 bg-gradient-to-b from-white to-slate-200 relative flex items-center border" id='hero'>
            <div className="container mx-auto h-full flex px-5 pt-24 items-center justify-between flex-col">

                <div className="text-center lg:w-2/3 mt-20 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I'm Atta Khan a <br className='hidden md:block' />
                        <span className="text-gray-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                            <ul className="block animate-text-slide-5 text-center leading-tight [&amp;_li]:block">
                                <li>Social Media Expert</li>
                                <li>Content Creator</li>
                                <li>Digital Marketer</li>
                                <li>SEO Specialist</li>
                                <li>Ethical Hacker</li>
                                <li aria-hidden="true">Professional Carter</li>
                            </ul>
                        </span>
                    </h1>
                    <p className="mb-8 leading-relaxed"> I am Social Media Manager with more than 7 years of exprerienbe. <br className='md:block hidden' /> My Skills are able to make buissnisses from zero to hero
                    </p>
                    <div className="flex gap-2 justify-center items-center">
                    <a className="inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-200  bg-gradient-to-r from-slate-800 to-slate-700    shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)]  before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]" href={socialLinks['instagram'].link} target='_blank'>Contact Me <Instagram size={20} /></a>
                        {/* <a href="/sign-in" className="w-full py-2 lg:w-fit group flex items-center rounded-full disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100  disabled:  text-gray-800 hover:bg-gray-100 active:bg-gray-200/75   lg:text-lg px-5 justify-center">
                <span>Whatsapp</span>
              </a> */}
                    </div>
                </div>
                <div className='relative z-[2] flex justify-center mt-24'>
                    <div className='absolute -bottom-5 flex gap-2'>
                        <a href={socialLinks['instagram'].link} target='_blank' className='p-2 bg-slate-800 group rounded-xl block'>
                            <Instagram size={20} className='group-hover:stroke-slate-300 duration-100' />
                        </a>
                        <a href={socialLinks['facebook'].link} target='_blank' className='p-2 bg-slate-800 group rounded-xl block'>
                            <Facebook size={20} className='group-hover:stroke-slate-300 duration-100' />
                        </a>
                        <a href={socialLinks['youtube'].link} target='_blank' className='p-2 bg-slate-800 group rounded-xl block'>
                            <Youtube size={20} className='group-hover:stroke-slate-300 duration-100' />
                        </a>
                    </div>
                    <Image width={1500} height={1500} alt="hero" src="/images/personal/down-circle.png" className="lg:w-2/6 md:w-3/6 w-5/6  object-cover object-center rounded" />
                </div>
            </div>
        </section>
    );
}
