import { FC } from 'react'
import { Grid } from '@mui/material'
import { CardPoduct } from './CardPoduct'
import { useState } from 'react';
import PriceSorter from '../ordenamiento/PriceSorter';

type Product = {
  name: string;
  price: number;
}
interface Props {
  products: string
}

export const CardProductList: FC<Props> = (product) => {

  const [products, setProducts] = useState<Product[]>([
    { name: 'Product A', price: 20 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 25 },
  ]);
  //este use State hay que cambiarlo cuando nos llegue la info del producto
  return (
    <div>
     <PriceSorter products={products} setProducts={setProducts} />
    <Grid container spacing={4}>
      {
      // products.map(product => {
      //     <CardPoduct
      //     key={product_id}
      //     product={product}/>
      // })
     
     }
    </Grid>
    </div>
  )
}

