import Head from "next/head"
import Link from "next/link"
import {Navbar} from "../Navbar"
import styles from "./MainLayout.module.css"
import { Inter } from "next/font/google";
import {IBoxProps} from "../../shared/interface/IBoxProps.interface"

const inter = Inter({ subsets: ["latin"] });
export const MainLayout = ({children}: IBoxProps) => {
  return (
    <>
    <Head>
      <title>Home page</title>
      <meta name="description" content="Home page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />

    <main className={`${styles.main} ${inter.className}`}>
        {children}
    </main>
  </>
  )
}
