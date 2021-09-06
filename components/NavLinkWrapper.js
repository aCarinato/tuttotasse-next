import NextLink from 'next/link';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navlink: {
    padding: '0 1rem',
  },
});

const NavLinkWrapper = ({ id, pageURL, menuTitle }) => {
  const classes = useStyles();
  const key = { id };
  return (
    <>
      <NextLink href={pageURL} passHref>
        <Link>
          <Typography color="secondary" className={classes.navlink}>
            {menuTitle}
          </Typography>
        </Link>
      </NextLink>
    </>
  );
};

export default NavLinkWrapper;
