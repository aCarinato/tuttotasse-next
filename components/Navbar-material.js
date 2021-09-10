import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import NavLinkWrapper from './NavLinkWrapper';
import MenuItemWrapper from './MenuItemWrapper';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NavbarMaterial = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  //   const currentPath = router.pathname;
  //   const [currentURLpath, setCurrentURLpath] = useState(currentPath);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const menuItems = [
    {
      menuTitle: 'Guide',
      pageURL: '/intertives',
    },
    {
      menuTitle: 'Calcolatori',
      pageURL: '/calcolatori',
    },
    {
      menuTitle: 'Articoli',
      pageURL: '/articoli',
    },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //   const handleMenuClick = (pageURL) => {
  //     router.push(pageURL);
  //     setAnchorEl(null);
  //   };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand} color="secondary">
                Tutto Tasse
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem, index) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItemWrapper key={index} menuTitle={menuTitle} pageURL={pageURL} />
                    // <MenuItem onClick={() => handleMenuClick(pageURL)}>
                    //   {menuTitle}
                    // </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.routes}>
              {menuItems.map((menuItem, index) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <NavLinkWrapper
                    key={index}
                    pageURL={pageURL}
                    menuTitle={menuTitle}
                  />
                  //   <NextLink href={pageURL} passHref>
                  //     <Link>
                  //       <Typography className={classes.navlink}>
                  //         {menuTitle}
                  //       </Typography>
                  //     </Link>
                  //   </NextLink>
                );
              })}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarMaterial;
