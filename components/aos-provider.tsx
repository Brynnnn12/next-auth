"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
}
