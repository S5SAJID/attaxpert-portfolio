import { Verified } from "lucide-react";
import SectionTitle from "../global/SectionTitle";

const mySkills = [
    "Instagram",
    "Ethical Hacking",
    "Content management",
    "Engagement strategies",
    "Analytics insights",
    "Campaign planning",
    "SEO optimization",
    "Crisis handling",
    "Influencer partnerships",
    "Advertising management"
];

export default function SkillsSection() {
    return (
        <section className="relative md:px-0 px-6 md:py-32 py-16 active" id="skills">
            <SectionTitle title="My Abilities" subtitle="My Skills" />

            <div className="mt-16 px-3 md:px-6 rounded-2xl p-6 py-14 bg-slate-100 w-full md:w-[40rem] mx-auto">
                <h3 className="text-xl text-slate-800 font-semibold text-center">What skills i have?</h3>

                <div className="grid px-3 md:px-14 md:grid-cols-2 place-content-center gap-6 mt-8">
                    <div>
                        { mySkills.slice(0,5).map((skill, index) => (
                            <li className="list-none mt-4 flex gap-2 items-center" key={index}>
                                <Verified className="fill-slate-600 stroke-slate-100" size={20} /> {skill}
                            </li>
                        )) }
                    </div>
                    <div>
                        { mySkills.slice(5,20).map((skill, index) => (
                            <li className="list-none mt-4 flex gap-2 items-center" key={index}>
                                <Verified className="fill-slate-600 stroke-slate-100" size={20} /> {skill}
                            </li>
                        ))  }
                    </div>
                </div>
            </div>
        </section>
    );
}