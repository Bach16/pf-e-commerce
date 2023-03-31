import Head from "next/head";
import { FC } from "react";
import { NavBar, SideMenu } from "../ui";
import { Footer } from "../ui/Footer";

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

    <main style={{
            margin: '60px auto',
            maxWidth: '1440px',
            padding: '0px 20px'
        }}>
            { children }
    </main>

    <footer>
      <Footer/>
    </footer>
    </>
  )
}
