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
  //   navlink: {
  //     padding: '0 1rem',
  //     // display: 'flex',
  //     // height: `${appbarHeight}px`,
  //     // height: '100%',
  //     color: (menuTitle) => {
  //       if (menuTitle === 'Guide') {
  //         return 'yellow';
  //       }
  //       return '#f2f2f2';
  //     },
  //     // '& hover': {
  //     // color: '#2196F3',
  //     //   backgroundColor: '#2196F3',
  //     // },
  //   },
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
