"use client";

import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Ripple } from "m3-ripple";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="p-2 w-10 h-10" />;

    return (
        <Button
            isIconOnly
            variant="ghost"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-white/5 dark:bg-white/10 hover:bg-white/10 dark:hover:bg-white/20 text-foreground border border-border transition-all rounded-full relative overflow-hidden"
            aria-label="Toggle theme"
        >
            <Ripple />
            {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
        </Button>
    );
}
