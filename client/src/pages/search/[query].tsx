import { NextPage } from "next";
import { ShopLayout } from "../../components/layouts";
import Typography from '@mui/material/Typography';


const SearchPage: NextPage = () => {
  return(
    <ShopLayout title="Search" pageDescription="E-Commerce Clothes">
      <Typography variant='h1' component='h1'>Items found</Typography>


    </ShopLayout>
  )
}

export default SearchPage