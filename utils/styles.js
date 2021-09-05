import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  // NavbarMaterial
  navbar: {
    background: '#222c2a',
  },
  root: {
    // flexGrow: 1,
  },
  brand: {
    // brand logo container
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#f2f2f2',
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
    background: '#f2f2f2',
  },
});

export default useStyles;
