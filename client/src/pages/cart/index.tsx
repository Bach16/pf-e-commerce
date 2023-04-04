import { Grid } from "@mui/material"
import { CardContent } from "@mui/material"
import { Box } from "@mui/material"
import { Button } from "@mui/material"
import { Divider } from "@mui/material"
import { Card } from "@mui/material"
import { Typography } from "@mui/material"
import { CartList } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"


const CartPage = () => {
  return (
    <ShopLayout title="Shopping Cart - 3" pageDescription="">
        <Typography variant='h1' component='h1'>Cart</Typography>

        <Grid container>
            <Grid item xs={12} sm={7}>
                <CartList/>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant='h2'>Order</Typography>
                        <Divider sx={{my:1}}/>

                        {/* Order Summary */}

                        <Box sx={{mt:3}}>
                            <Button color='primary' className="circular-btn" fullWidth>
                                CheckOut
                            </Button>
                        </Box>

                    </CardContent>
                </Card>

            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage
