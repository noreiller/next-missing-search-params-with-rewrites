import { Menu } from "@/Menu";
import { Pathname } from "@/Pathname";
import { SearchParams } from "@/SearchParams";

export default function Home() {
  return (
    <>
      <h1>Homepage (Page Router)</h1>
      <Pathname />
      <SearchParams />
      <Menu />
    </>
  );
}
