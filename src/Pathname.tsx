"use client";

import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

export const Pathname: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <p>
      Pathname is: <code>{pathname}</code>
    </p>
  );
};
