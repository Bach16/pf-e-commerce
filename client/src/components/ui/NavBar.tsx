import { AppBar, Toolbar, Link } from '@mui/material';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';

export const NavBar = () => {
  return (
    <AppBar color='inherit'>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link color='#ffffff'>
                <Typography variant='h6' color='black'>E-Commerce</Typography>
                </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
