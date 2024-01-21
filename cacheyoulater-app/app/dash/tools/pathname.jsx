"use client";

import { usePathname } from "next/navigation";

export default function pathGetter() {
  const pathname = usePathname();
  return pathname;
}
