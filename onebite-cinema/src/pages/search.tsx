import SearchBar from "@/components/searchbar";
import { useRouter } from "next/router"
import { ReactNode } from "react";
import style from './search.module.css';
import movies from '@/mock/movie.json';
import MovieItem from "@/components/movie-item";

export default function Page() {
  const router = useRouter();
  const keyword = router.query.q as string;
  const resultArray = movies.filter((movie) => (movie.title.includes(keyword)));

  return (
    <section className={style.result_box}>
      <ul className={style.movie_list}>
        {resultArray.map((movie) =>
          <li key={movie.id} className={style.movie_item}>
            <MovieItem {...movie} />
          </li>
        )}
      </ul>
    </section>
  )
}

Page.getLayout = (page:ReactNode) => {
  return <SearchBar>{page}</SearchBar>
}
