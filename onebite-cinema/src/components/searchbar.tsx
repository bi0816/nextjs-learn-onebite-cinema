import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchbar.module.css';

export default function SearchBar({children}:{children: ReactNode}) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;


  useEffect(()=>{
    setSearch(q || "")
  }, [q])

  const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      onSubmit();
    }
  }

  const stopEvent = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={stopEvent} className={style.search_box}>
      <input type="text" placeholder="검색어를 입력해주세요." className={style.input}
        value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button type="submit" onClick={onSubmit} className={style.btn_submit}>검색</button>
    </form>
    {children}
    </>
  )
}
