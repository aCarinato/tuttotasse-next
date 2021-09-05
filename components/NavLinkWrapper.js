import NextLink from 'next/link';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navlink: {
    padding: '0 1rem',
    color: '#f2f2f2',
  },
});

const NavLinkWrapper = ({ id, pageURL, menuTitle }) => {
  const classes = useStyles();
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
