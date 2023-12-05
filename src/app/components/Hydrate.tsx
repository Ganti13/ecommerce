"use client";

import { useEffect, useState } from "react";

export const Hydrate = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted ? children : null}</>;
};
