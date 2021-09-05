import NextLink from 'next/link';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navlink: {
    padding: '0 1rem',
    color: ({ currentURLpath, pageURL }) => {
      if (currentURLpath === pageURL) {
        return '#2196F3';
      }
      return '#f2f2f2';
    },
  },
});

const NavLinkWrapper = ({ id, pageURL, menuTitle, currentURLpath }) => {
  //   const showPageURL = (pageURL) => {
  //     console.log('the current page url is: ' + pageURL);
  //   };

  const classes = useStyles({ currentURLpath, pageURL });
  const key = { id };
  return (
    <>
      <NextLink href={pageURL} passHref>
        <Link>
          <Typography className={classes.navlink}>{menuTitle}</Typography>
        </Link>
      </NextLink>
    </>
  );
};

export default NavLinkWrapper;
