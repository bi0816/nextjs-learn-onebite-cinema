import SearchBar from "@/components/searchbar";
import { useRouter } from "next/router"
import { ReactNode } from "react";
import style from './search.module.css'

export default function Page() {
  const router = useRouter();
  const {q} = router.query;

  return (
    <div className={style.result_box}>
      검색 결과: {q}
    </div>
  )
}

Page.getLayout = (page:ReactNode) => {
  return <SearchBar>{page}</SearchBar>
}
