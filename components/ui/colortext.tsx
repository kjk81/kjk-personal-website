export default function ColorText({children, color}: {children: React.ReactNode, color: string}) {
    return <span className={`text-${color}`}>{children}</span>;
}