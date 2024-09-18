import SearchBar from "@/components/searchbar";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1>home</h1>
    </>
  );
}

Home.getLayout = (page:ReactNode) => {
  return <SearchBar>{page}</SearchBar>
}
