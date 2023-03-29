import { AppBar, Toolbar, Link, Box, IconButton } from '@mui/material';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import { Menu, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar >
        <Toolbar >
            <NextLink  href='/' passHref>
                <Link sx={{pb:1}}>
                <Typography variant='h6' color='black'>E-Commerce</Typography>
                </Link>
            </NextLink>

            <Box flex={1} />

            <IconButton>
                <SearchOutlined color='primary'/>
            </IconButton>

            <NextLink href='/cart' passHref>
                <Link>
                <IconButton>
                    <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined color='primary'/>
                    </Badge>
                </IconButton>
                </Link>
            </NextLink>

            <IconButton color='primary'>
                <Menu/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
