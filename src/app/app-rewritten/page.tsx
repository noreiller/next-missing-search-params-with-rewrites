import { Menu } from "@/Menu";
import { Pathname } from "@/Pathname";
import { SearchParams } from "@/SearchParams";

export default function Rewritten() {
  return (
    <>
      <h1>Rewritten page (App Router)</h1>
      <Pathname />
      <SearchParams />
      <Menu />
    </>
  );
}
