import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // NavbarMaterial
  root: {
    // flexGrow: 1,
  },
  brand: {
    // brand logo container
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    fontWeight: 'bold',
  },
  grow: {
    flexGrow: 1,
  },
  routes: {
    display: 'flex',
    // alignItems: 'stretch',
    // alignContent: 'center',
  },
  linkContainer: {
    // textAlign: 'center',
  },
  //   MAIN
  main: {
    minHeight: '80vh',
    // background: '#f2f2f2',
  },
}));

export default useStyles;
