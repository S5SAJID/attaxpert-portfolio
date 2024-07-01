import { Award, BriefcaseBusiness, Headphones, LucideIcon } from "lucide-react";
import SectionTitle from "../global/SectionTitle";

export default function AboutSection() {
    return (
        <section className="relative md:py-32 px-4 md:px-0 py-16 active" id="about">
            <SectionTitle title="About Me" subtitle="Introduction"/>

            <div className="flex overflow-hidden md:gap-8 gap-2 mt-6 items-center justify-center">
                <AboutCard title="Experience" icon={Award} subTitle="7+ Years"/>
                <AboutCard title="Work" icon={BriefcaseBusiness} subTitle="20 Done"/>
                <AboutCard title="Support" icon={Headphones} subTitle="7+ Years"/>
            </div>
            <div className="text-center w-full md:w-[40rem] mx-auto mt-6">
                <p className="text-slate-400 text-[15px]">I'm a Passionate Social Media Manager and with over 3 years of experience, I am a dedicated Social Media Manager with a proven track record of transforming businesses from zero to hero. My diverse skill set and passion for innovation ensure the best strategies and designs to elevate your online presence.</p>
            </div>
            {/* <div className="flex gap-4">
                <div></div>
                <div className="md:w-[40rem] px-4 mx-auto text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">I'm a Passionate Social Media Manager</h3>
                    <p className="text-slate-400 text-[15px]">With over 3 years of experience, I am a dedicated Social Media Manager with a proven track record of transforming businesses from zero to hero. My diverse skill set and passion for innovation ensure the best strategies and designs to elevate your online presence.</p>
                </div>
            </div> */}
        </section>
    );
}

export type AboutCardProps = {
    title: string,
    icon: LucideIcon,
    subTitle: string
}

export function AboutCard(props: AboutCardProps) {
    return (
        <div className="md:p-6 p-3 min-w-24 min-h-24  bg-slate-100 md:min-w-40 rounded-xl flex flex-col items-center">
            <props.icon size={20} className="stroke-slate-500" />
            <h3 className="text-slate-800 mt-2 font-semibold">{props.title}</h3>
            <p className="text-sm">{props.subTitle}</p>
        </div>
    )
}