import type {NextPage} from 'next';
import { ShopLayout } from '../components/layouts';
import '../../styles/globals.css'


const Home: NextPage = () => {
  return(
    <ShopLayout title={'E-Commerce'} pageDescription={'E-Commerce Clothes'}>
    </ShopLayout>
  )
}

export default Home;