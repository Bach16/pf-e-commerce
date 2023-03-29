import { Grid } from "@mui/material"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"
import ProductSlideShow from "../../components/products/ProductSlideShow"
import 'react-slideshow-image/dist/styles.css';
import ItemCounter from "../../components/ui/ItemCounter"
import SizeSelector from "../../components/products/SizeSelector"

const images = [
  "https://dbdzm869oupei.cloudfront.net/img/t-shirts/large/63892.jpg","https://dbdzm869oupei.cloudfront.net/img/t-shirts/large/63892.jpg"
]

const sizes = [
  "L","M","S","XL","XS"
]

const ProductPage = () => {
  return (
    <>
      <h1>navbar</h1> {/* -----> implementar Layout */}
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm ={7} >
          <ProductSlideShow images={images}/>
        </Grid>

        <Grid item xs={12} sm={5} >
          <Box display="flex" flexDirection="column">

            <Typography variant="h1" component="h1">Camiseta</Typography>
            {/* Rating */}
            <Typography variant="subtitle1" component="h2">$11.99</Typography>

            <Box sx={{my:2}}>
              <Typography variant="subtitle2" >Cantidad</Typography>
              <ItemCounter/>
              <SizeSelector sizes={sizes}/>
              </Box>

            <Button color="secondary" className="circular-bnt">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay stock" color="error" variant="outlined" ></Chip> */}

            <Box sx={{mt:3}}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>
    </>
  )
}

export default ProductPage