import type { NextPage } from "next";
import { Grid, Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { CardProductList } from "../components/products/CardProductList";



const Home: NextPage = () => {

    return (
        <ShopLayout title={"E-COMMERCE - Home"} pageDescription= {"Encuentra los mejores productos"}>
            <Typography variant="h1" component="h1" >
                Tienda
            </Typography>
            <Typography variant="h2" sx={{ mb: 1}}> 
            Todos los productos
            </Typography>
         <CardProductList products={""}/>

        
        </ShopLayout>
    )

}

export default Home