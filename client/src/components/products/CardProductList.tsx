import { FC } from 'react'
import { Grid } from '@mui/material'
import { CardPoduct } from './CardPoduct'

interface Props {
  products: string
}

export const CardProductList: FC<Props> = (products) => {
  return (
    <Grid container spacing={4}>
      {
      // products.map(product => {
      //     <CardPoduct
      //     key={product_id}
      //     product={product}/>
      // })
     
     }
    </Grid>
  )
}
