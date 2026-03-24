import { Zap } from "lucide-react";

export function Logo({ className }: { className?: string }) {
    return (
        
        <div className={`flex items-center gap-2 font-bold text-xl tracking-tighter ${className}`}>
            <div className="bg-gold p-1 rounded-sm text-black">
                <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-foreground">DART<span className="text-gold">CODES</span></span>
        </div>
    );
}
