import { AppBar, Toolbar, Link, Box, IconButton, InputAdornment, Input } from '@mui/material';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import { Menu, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext, useState } from 'react';
import { UiContext } from '../../context'
import { useRouter } from 'next/router';

export const NavBar = () => {

    const {toggleSideMenu} = useContext(UiContext);

    const router = useRouter();



    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if(searchTerm.trim().length === 0) return;
        navigateTo(`/search/${searchTerm}`)
    }

    const navigateTo = (url: string) => {
        router.push(url)
    }
  return (
    <AppBar >
        <Toolbar >
            <NextLink  href='/' passHref>
                <Link sx={{pb:1}}>
                <Typography variant='h6' color='black'>E-Commerce</Typography>
                </Link>
            </NextLink>

            <Box flex={1} />

            <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                >
                                 <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />

            <NextLink href='/cart' passHref>
                <Link>
                <IconButton>
                    <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined color='primary'/>
                    </Badge>
                </IconButton>
                </Link>
            </NextLink>

            <IconButton color='primary' onClick={toggleSideMenu}>
                <Menu/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
