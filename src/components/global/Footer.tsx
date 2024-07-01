import { navbarLinks, socialLinks } from "@/utils/constants";
import { Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 overflow-hidden">
                <div className="flex gap-10 py-8 justify-between md:py-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
                    <div className="space-y-2 sm:col-span-12 lg:col-span-4">
                        <div className="text-sm text-gray-600">© AttaXpert - All rights reserved.
                        </div>
                    </div>
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">AttaXpert</h3>
                        <ul className="space-y-2 text-sm">
                            { navbarLinks.map((li, i) => (
                                <li key={i}>
                                    <a className="text-gray-600 transition hover:text-gray-900" href={li.url}>{li.title}</a>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h3 className="text-sm font-medium">Social</h3>
                        <ul className="flex gap-1 items-center">
                        <li>
                                <a className="flex items-center justify-center text-blue-500 transition hover:text-blue-600" aria-label="Instagram" href={socialLinks['instagram'].link}><Instagram size={20}/></a>
                            </li>
                            <li>
                                <a className="flex items-center justify-center text-blue-500 transition hover:text-blue-600" aria-label="Whatsapp" href={socialLinks['whatsapp'].link}><MessageCircle size={20}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative -mt-16 h-60 overflow-hidden w-full" aria-hidden="true">
                <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['ATTA'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['ATTA'] after:[text-shadow:0_1px_0_white]">

                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
                    <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]">
                    </div>
                </div>
            </div>
        </footer>
    );
}