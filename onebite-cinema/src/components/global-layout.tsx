import Link from "next/link";
import { ReactNode } from "react";
import style from './global-layout.module.css';

export default function GlobalLayout({children}:{
  children: ReactNode
}) {
  return (
    <div className={style.wrap}>
      <header className={style.header}>
        <Link href={'/'} className={style.menu}>🍿 ONEBITE CINEMA</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>Footer</footer>
    </div>
  )
}
