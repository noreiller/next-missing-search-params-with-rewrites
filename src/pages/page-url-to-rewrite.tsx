import { GetServerSideProps } from "next";

export default function PageUrlToRewrite() {
  return null;
}

export const getServerSideProps: GetServerSideProps = () =>
  Promise.resolve({ notFound: true });
