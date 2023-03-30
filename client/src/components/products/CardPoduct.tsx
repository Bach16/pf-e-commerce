import { Grid, Card, CardActionArea, CardMedia, Box, makeStyles, Typography, Link } from "@mui/material"
import { FC, useMemo, useState } from "react"
import NextLink from "next/link";



const useStyles = makeStyles({
  FadeIn: {
    "-webkit-animation-duration": "0.5s",
    "animation-duration": "0.5s",
    "-webkit-animation-fill-mode": "both",
    "animation-fill-mode": "both",
    "-webkit-animation-name": "fadeIn",
    "animation-name": "fadeIn",
  },
});

interface Props {
  product: String[]
}


export const CardPoduct: FC<Props> = ({ }) => {

  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
    // ? `products/${ product.images[1]}`
    // : `products/${ product.images[0]}`

  }, [isHovered])
  // , product.images /esto va al lado de isHovered cuando este la info


  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={"/product/slug"} passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component='img'
                className="FadeIn"
                //   image = {product.Image} 
                //   alt = {product.title}
                onLoad={() => console.log("cargo")}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className={"FadeIn"}>
        <Typography fontWeight={700}>
          {/* `$${Product.title}` */}
        </Typography>
        <Typography fontWeight={600}>
          {/* {Product.price} */}
        </Typography>
      </Box>
    </Grid>
  )
}