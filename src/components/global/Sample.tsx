import { Award, BarChartBig, Code, Edit, Globe, LucideIcon, MessageSquareDashedIcon, Wallet } from "lucide-react";

const servicesList: ServiceCardProps[] = [
    {
        title: "Social Media Management",
        desc: "Crafting engaging content, managing profiles, and boosting audience engagement.",
        icon: MessageSquareDashedIcon, // Replace with appropriate LucideIcon
    },
    {
        title: "Content Creation",
        desc: "Producing compelling and relevant content tailored to your audience.",
        icon: Edit, // Replace with appropriate LucideIcon
    },
    {
        title: "Web Development",
        desc: "Designing and developing dynamic and user-friendly websites.",
        icon: Code, // Replace with appropriate LucideIcon
    },
    {
        title: "Marketing Strategy",
        desc: "Implementing effective marketing campaigns to promote your brand.",
        icon: BarChartBig, // Replace with appropriate LucideIcon
    },
];

export default function Sample() {
    return (
        <div className="py-16">
            <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
                <div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-700 text-center md:text-4xl">
                        What do i offer?
                    </h2>
                </div>
                <div className="mt-16 grid divide-x divide-y divide-gray-100  overflow-hidden rounded-3xl border border-gray-100  sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                    { servicesList.map((service, index) => (
                        <ServiceCard {...service} key={index}/>
                    )) }
                </div>
            </div>
        </div>
    );
}

export type ServiceCardProps = {
    title: string,
    desc: string,
    icon: LucideIcon,
}

export function ServiceCard(props: ServiceCardProps) {
    return (
        <div className="group relative bg-white  transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
                <props.icon />

                <div className="space-y-2">
                    <h5
                        className="text-xl font-medium text-gray-700  transition group-hover:text-primary"
                    >
                        {props.title}
                    </h5>
                    <p className="text-sm text-gray-600 ">
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}