import { AppBar, Toolbar, Link, Box, IconButton, Button, makeStyles } from '@mui/material';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import { Menu, SearchOutlined, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { UiContext } from '../../context'

const useStyles = makeStyles({
    MuiButton: {
        defaultProps: {
            variant: 'contained',
            size: 'small',
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                backgroundColor: 'white',
                color: 'black',
                textTransform: 'none',
                boxShadow: 10,
                ":hover": {
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease-in-out'
                }
            }
        },
    },
});
//estilos para los filtros


export const NavBar = () => {

    const { toggleSideMenu } = useContext(UiContext)
    return (
        <AppBar >
            <Toolbar >
                <NextLink href='/' passHref>
                    <Link sx={{ pb: 1 }}>
                        <Typography variant='h6' color='black'>E-Commerce</Typography>
                    </Link>
                </NextLink>


                <Box flex={1} />
                <Box sx={{display: {xs:'none' ,sm : "block"}}}>
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button>
                                Hombres
                            </Button>
                        </Link>
                    </NextLink>


                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button>
                                Mujer
                            </Button>
                        </Link>
                    </NextLink>


                    <NextLink href='/category/kid' passHref>
                        <Link>
                            <Button>
                                Niños
                            </Button>
                        </Link>
                    </NextLink>
                </Box>
                <Box flex={1} />


                <IconButton>
                    <SearchOutlined color='primary' />
                </IconButton>

                <NextLink href='/cart' passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCartOutlined color='primary' />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <IconButton color='primary' onClick={toggleSideMenu}>
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
