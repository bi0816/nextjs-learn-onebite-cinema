import { useRouter } from "next/router";
import style from './[id].module.css';
import movies from '@/mock/movie.json';

export default function Page() {
  const router = useRouter();
  const queryId = parseInt(router.query.id as string);
  const filteredItem = movies.filter((movie) => (movie.id === queryId));
  const movieObject = Object.assign({}, ...filteredItem);

  return (
    <div>
      <div className={style.poster_box}>
        <span className={style.bg_img} style={{backgroundImage: `url('${movieObject.posterImgUrl}')`}}></span>
        <img src={movieObject.posterImgUrl} alt={`${movieObject.title} 이미지`} />
      </div>
      <div className={style.detail_group}>
        <dl className={style.detail_box}>
          <dt className="blind">개봉일자</dt>
          <dd className={style.date}>{movieObject.releaseDate}</dd>
          <dt className="blind">장르</dt>
          <dd className={style.genre}>{movieObject.genres + ', '}</dd>
          <dt className="blind">상영시간</dt>
          <dd className={style.runtime}>{movieObject.runtime}분</dd>
        </dl>
        <dl className={style.detail_box}>
          <dt className="blind">영화제목</dt>
          <dd className={style.title}>
            <span className={style.title_text}>{movieObject.title}</span>
          </dd>
          <dt className="blind">한 줄 소개</dt>
          <dd className={style.sub_title}>{movieObject.subTitle}</dd>
        </dl>
        <dl className={`${style.detail_box} ${style.desc_box}`}>
          <dt className="blind">영화설명</dt>
          <dd className={style.desc}>{movieObject.description}</dd>
        </dl>
        <dl className={`${style.detail_box} ${style.copyright}`}>
          <dt className="blind">제작사</dt>
          <dd className={style.date}>&copy; {movieObject.company}</dd>
        </dl>
      </div>
    </div>
  )
}
