"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const iconSrc = isDark
    ? "/images/logos/icon-logo-white-gold.svg"
    : "/images/logos/icon-logo-black-gold.svg";
  const textSrc = isDark
    ? "/images/logos/dc-text-logo-white-gold.svg"
    : "/images/logos/dc-text-logo-black-gold.svg";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={iconSrc}
        alt="DartCodes icon"
        className="h-10 w-10 object-contain"
      />
      <img
        src={textSrc}
        alt="DartCodes wordmark"
        className="hidden sm:block h-8 object-contain"
      />
    </div>
  );
}
