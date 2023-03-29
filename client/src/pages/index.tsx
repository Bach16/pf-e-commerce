import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ShopLayout } from '../components/layouts';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return(
    <ShopLayout title={'E-Commerce'} pageDescription={'E-Commerce Clothes'}>

    </ShopLayout>
  )
}

export default Home;