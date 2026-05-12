"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type LogoAssetFormat = "svg" | "png";

export function Logo({
  className,
  assetFormat = "svg",
}: {
  className?: string;
  assetFormat?: LogoAssetFormat;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const iconSrc =
    assetFormat === "png"
      ? isDark
        ? "/images/logos/Icon%20Logo%20White%20Gold%20(2).png"
        : "/images/logos/Icon%20Logo%20Black%20Gold%20(2).png"
      : isDark
        ? "/images/logos/icon-logo-white-gold.svg"
        : "/images/logos/icon-logo-black-gold.svg";
  const textSrc =
    assetFormat === "png"
      ? isDark
        ? "/images/logos/DC%20Text%20Logo%20White%20Gold%20(2).png"
        : "/images/logos/DC%20Text%20Logo%20Black%20Gold.png"
      : isDark
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
        className="block h-7 sm:h-8 object-contain"
      />
    </div>
  );
}
