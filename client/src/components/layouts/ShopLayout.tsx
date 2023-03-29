import Head from "next/head";
import { FC } from "react";

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
    </Head>

    <nav>

    </nav>

    <main>
        {children}
    </main>

    <footer>

    </footer>
    </>
  )
}
