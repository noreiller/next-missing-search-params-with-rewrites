import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export const Query: FunctionComponent = () => {
  const { query } = useRouter();

  return (
    <ul>
      <li>
        Has query param <code>foo</code>?{" "}
        {query.foo !== undefined ? `yes (${query.foo})` : "no"}
      </li>
    </ul>
  );
};
