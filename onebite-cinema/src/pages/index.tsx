import SearchBar from "@/components/searchbar";
import { ReactNode } from "react";
import movies from '@/mock/movie.json';
import MovieItem from "@/components/movie-item";
import style from './index.module.css';

export default function Home() {
  // const TOTAL_COUNT = movies.length;
  // const filteredArray = [];
  // let data;

  // for (let i = 0; i < 8; i++) {
  //   const RANDOM_COUNT = Math.floor(Math.random() * TOTAL_COUNT);
  //   if (data === undefined) {
  //     data = movies[RANDOM_COUNT];
  //     filteredArray.push(data);
  //     data = '';
  //   } else if (data !== undefined) {
  //     data = movies[RANDOM_COUNT];
  //     const value = filteredArray.findIndex((item) => item.id === data.id);
  //     (value === -1) ? filteredArray.push(data) : i--;
  //   }
  // }
  // console.log(filteredArray);

  const newArray = movies.filter((movie, index) => index < 3)
  return (
    <>
      <section className={style.movie_list_box}>
        <h1 className={style.title}>지금 가장 추천하는 영화</h1>
        <ul className={style.movie_list}>
          {/* {filteredArray.map((movie) =>
            <li key={movie.id} className={style.movie_item}>
              <MovieItem {...movie} />
            </li>
          )} */}

          {newArray.map((movie) =>
            <li key={movie.id} className={style.movie_item}>
              <MovieItem {...movie} />
            </li>
          )}
        </ul>
      </section>
      <section className={style.movie_list_box}>
        <h1 className={style.title}>등록된 모든 영화</h1>
        <ul className={style.movie_list}>
          {movies.map((movie) =>
            <li key={movie.id} className={style.movie_item}>
              <MovieItem {...movie} />
            </li>
          )}
        </ul>
      </section>
    </>
  );
}

Home.getLayout = (page:ReactNode) => {
  return <SearchBar>{page}</SearchBar>
}
