import { Camera, CodeSquareIcon, LucideMoonStar } from "lucide-react";

export default function ServiceCard() {
    return (
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-slate-300 via-slate-500 to-slate-600 p-0.5 shadow-none transition hover:shadow-xl hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 sm:p-6 h-full">
                <Camera size={50} className="mb-5 stroke-slate-600 stroke-1" />

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        Ios App Designer
                    </h3>
                </a>
                <p className="block mt-2 text-gray-500"> The phrasal sequence of the is now so that many campaign and benefit </p>
            </div>
        </article>
    );
}