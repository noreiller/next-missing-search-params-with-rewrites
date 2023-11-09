"use client";

import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

export const SearchParams: FunctionComponent = () => {
  const searchParams = useSearchParams() || new URLSearchParams();

  return (
    <ul>
      <li>
        Has search param <code>foo</code>?{" "}
        {searchParams.has("foo") ? `yes (${searchParams.get("foo")})` : "no"}
      </li>
    </ul>
  );
};
