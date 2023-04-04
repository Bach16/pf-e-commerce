import { Box } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { Typography } from "@mui/material";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import NextLink from 'next/link'
import { Link } from "@mui/material";

 const EmptyPage = () => {
  return (
    <ShopLayout title='Empty Cart' pageDescription="">
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            <RemoveShoppingCartOutlined sx={{fontSize:100}}/>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography fontSize={40}>Your cart is empty</Typography>
                <NextLink href='/' passHref>
                    <Link typography='h4' color='blue'>
                        Go Back
                    </Link>
                </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage
