import { Container } from '@material-ui/core';
import Navbar from './Navbar';
import NavbarMaterial from './Navbar-material';
import useStyles from '../utils/styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      {/* <Navbar /> */}
      <NavbarMaterial />
      <Container className={classes.main}>{children}</Container>
    </>
  );
};

export default Layout;
