import type { NextPage } from "next";
import { Grid, Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";
import { CardProductList } from "../components/products/CardProductList";

import { TypeFilter } from "../components/filters/TypeFilter"


const filtros=[
"pantalones", "camisetas"
]

const Home: NextPage = () => {

    return (
        
        <ShopLayout title={"E-COMMERCE - Home"} pageDescription= {"Encuentra los mejores productos"}>
            <Typography variant="h1" component="h1" >
                Tienda
            </Typography>
            <Typography variant="h2" sx={{ mb: 1}}> 
            Todos los productos
            </Typography>
            <TypeFilter types={filtros}/>
         <CardProductList products={""}/>

        
        </ShopLayout>
    )

}

export default Home