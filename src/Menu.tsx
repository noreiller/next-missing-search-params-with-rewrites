import Link from "next/link";
import { FunctionComponent } from "react";

export const Menu: FunctionComponent = () => (
  <>
    <ul style={{ padding: "1rem 2rem" }}>
      <li>
        <a href="/">[App Router] Go to home page</a>
      </li>
      <li>
        <a href="/app-url-to-rewrite">
          [App Router] Go to Rewritten page (full refresh)
        </a>
      </li>
      <li>
        <Link href="/app-url-to-rewrite">
          [App Router] Go to Rewritten page (client-side navigation)
        </Link>
      </li>
      <li>
        <a href="/app-rewritten?foo=bar">
          [App Router] Go to Target page with params (full refresh)
        </a>
      </li>
    </ul>
    <ul style={{ padding: "1rem 2rem" }}>
      <li>
        <a href="/home">[Page Router] Go to home page</a>
      </li>
      <li>
        <a href="/page-url-to-rewrite">
          [Page Router] Go to Rewritten page (full refresh)
        </a>
      </li>
      <li>
        <Link href="/page-url-to-rewrite">
          [Page Router] Go to Rewritten page (client-side navigation)
        </Link>
      </li>
      <li>
        <a href="/page-rewritten?foo=bar">
          [Page Router] Go to Target page with params (full refresh)
        </a>
      </li>
    </ul>
  </>
);
