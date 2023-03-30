import { AppBar, Toolbar, Link, Box, IconButton } from '@mui/material';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import { Menu} from '@mui/icons-material';
import { useContext } from 'react';
import { UiContext } from '../../context'

export const AdminNavbar = () => {

    const {toggleSideMenu} = useContext(UiContext)
  return (
    <AppBar >
        <Toolbar >
            <NextLink  href='/' passHref>
                <Link sx={{pb:1}}>
                <Typography variant='h6' color='black'>E-Commerce</Typography>
                </Link>
            </NextLink>

            <Box flex={1} />

            <IconButton color='primary' onClick={toggleSideMenu}>
                <Menu/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
