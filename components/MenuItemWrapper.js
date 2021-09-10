import NextLink from 'next/link';
import { Link } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const MenuItemWrapper = ({ id, menuTitle, pageURL }) => {
  const key = { id };
  return <MenuItem>
  <NextLink href={pageURL} passHref>
    <Link>{menuTitle}</Link>
    </NextLink>
  </MenuItem>;
};

export default MenuItemWrapper;
