import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { ShopLayout } from "../components/layouts";


const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription="">
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            <Typography variant='h1' component='h1' fontSize={70} fontWeight={150}>404 |</Typography>
            <Typography marginLeft={2} fontSize={30}>Page not found</Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404;
