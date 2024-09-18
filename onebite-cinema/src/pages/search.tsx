import SearchBar from "@/components/searchbar";
import { useRouter } from "next/router"
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const {q} = router.query;

  return <>검색 결과: {q}</>
}

Page.getLayout = (page:ReactNode) => {
  return <SearchBar>{page}</SearchBar>
}
