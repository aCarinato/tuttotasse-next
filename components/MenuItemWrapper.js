import { MenuItem } from '@material-ui/core';

const MenuItemWrapper = ({ id, menuTitle }) => {
  const key = { id };
  return <MenuItem>{menuTitle}</MenuItem>;
};

export default MenuItemWrapper;
