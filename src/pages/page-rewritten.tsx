import { Menu } from "@/Menu";
import { Pathname } from "@/Pathname";
import { Query } from "@/Query";
import { SearchParams } from "@/SearchParams";
import { GetServerSideProps } from "next";

export default function Rewritten() {
  return (
    <>
      <h1>Rewritten page (Page Router)</h1>
      <Pathname />
      <SearchParams />
      <Query />
      <Menu />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = () =>
  Promise.resolve({ props: {} });
