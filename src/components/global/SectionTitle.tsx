export type SectionTitleProps = {
    title: string,
    subtitle: string,
    className?: string
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <div className="text-center leading-tight">
            <p className="text-sm opacity-60">{props.title}</p>
            <h1 className="text-2xl font-semibold text-slate-800">{props.subtitle}</h1>
        </div>
    );
}