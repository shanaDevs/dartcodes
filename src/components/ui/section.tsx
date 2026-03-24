import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    id?: string;
}

export function Section({ children, className, containerClassName, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("w-full px-6 md:px-12", className)}
            {...props}
        >
            <div className={cn("py-16 md:py-24 w-full max-w-[1920px] mx-auto", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
