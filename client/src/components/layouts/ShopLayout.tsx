import Head from "next/head";
import { FC } from "react";
import { NavBar, SideMenu } from "../ui";

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}


export const ShopLayout:FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />
    </Head>

    <nav>
      <NavBar/>
    </nav>

    <SideMenu/>

    <main>
        {children}
    </main>

    <footer>

    </footer>
    </>
  )
}
