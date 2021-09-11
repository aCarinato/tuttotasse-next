import { Container, ThemeProvider } from '@material-ui/core';
import NavbarMaterial from './Navbar-material';
import useStyles from '../utils/styles';
import { createTheme } from '@material-ui/core';

const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#222c2a',
      },
      secondary: {
        main: '#f2f2f2',
      },
    },
    typography: {
      // fontFamily: 'Lobster',
      fontFamily: ['Arial', 'Azeret Mono', 'Roboto', 'Lobster'].join(','),
    },
  });
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarMaterial />
        <Container className={classes.main}>{children}</Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
