import { CompassIcon, DraftingCompassIcon, Edit, Globe, InstagramIcon, YoutubeIcon, LayoutGridIcon, LineChart, LucideIcon, MapPinned, Network, PieChartIcon, Video } from "lucide-react";
import SectionTitle from "../global/SectionTitle";

const myServices: ServiceCardProps[] = [
    {
        "icon": InstagramIcon,
        "title": "Instagram All Services",
        "desc": "Craft compelling and engaging content."
    },
    {
        "icon": Network,
        "title": "Ethical Hacking",
        "desc": "Expert in ethical hacking."
    },
    {
        "icon": YoutubeIcon,
        "title": "Youtube All Services",
        "desc": "Write persuasive and effective copy."
    },
    {
        "icon": PieChartIcon,
        "title": "Strategy Development",
        "desc": "Plan and execute content strategies."
    },
    {
        "icon": CompassIcon,
        "title": "Marketing Campaigns",
        "desc": "Develop and manage marketing campaigns."
    },
    {
        "icon": Globe,
        "title": "SEO Optimization",
        "desc": "Optimize content for search engines."
    },
    {
        "icon": Video,
        "title": "Social Media Management",
        "desc": "Manage and optimize social media profiles."
    },
    {
        "icon": MapPinned,
        "title": "Audience Engagement",
        "desc": "Enhance interaction and engagement."
    },
    {
        "icon": LineChart,
        "title": "Analytics",
        "desc": "Monitor and analyze social media performance."
    }
]


export default function ServicesSection() {
    return (
        <section className="relative md:py-24 mt-10 py-16 px-6 md:px-0" id="services">
            <div className="container mx-auto bg-slate-100 rounded-xl px-10 py-20">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <SectionTitle title="Services" subtitle="What I do offer?" />

                    <p className="text-slate-400 max-w-xl mt-4 mx-auto text-[15px]">Let me elevate your social media presence. Enhance your social media strategy with me.</p>
                </div>{/*end grid*/}

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    { myServices.map((ser, i) => <ServiceCard key={i} {...ser}/>) }
                </div>
            </div>{/*end container*/}
        </section>
    );
}

export type ServiceCardProps = {
    title: string,
    desc: string,
    icon: LucideIcon,
}
export function ServiceCard(props: ServiceCardProps) {
    return (
        <div className="px-10 py-10 shadow shadow-gray-200 hover:shadow-md   transition duration-500 rounded-2xl bg-white ">
            <props.icon className="h-10 w-10 stroke-1 text-slate-500"/>
            <div className="content mt-7">
                <h3 className="title h5 text-[17px] font-medium cursor-pointer">{props.title}</h3>
                <p className="text-slate-400 mt-3 text-[15px]">{props.desc}</p>

                {/* <div className="mt-5">
                    <a href="#" className="hover:text-slate-500  after:bg-slate-500  transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                </div> */}
            </div>
        </div>
    )
}