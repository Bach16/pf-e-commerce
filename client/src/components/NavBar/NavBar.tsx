import { AppBar, Toolbar, Link, Box, IconButton, Badge } from "@mui/material";
import Typography from "@mui/material/Typography";
import NextLink from 'next/link';
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'


export const NavBar = () => {
  return (
    <AppBar color='inherit'>
        <Toolbar>
            <NextLink href='/' passHref>
                <Typography variant='h6' display='flex' alignItems='center' color='black'>E-Commerce</Typography>
            </NextLink>

            <Box>

            </Box>

            <Box flex={1}/>

            <IconButton>
              <SearchOutlined/>
            </IconButton>

            <NextLink href='cart' passHref>
              <IconButton>
                <Badge badgeContent={2} color='primary'>
                <ShoppingCartOutlined/>
                </Badge>
              </IconButton>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
