import Link from 'next/link';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useLanguageMenu, useRedirectedPathName } from '@/features/header/hooks';

export const LanguageBtn = () => {
  const { getHref, currentLocal } = useRedirectedPathName();
  const { open, handleClick, anchorEl, handleClose } = useLanguageMenu();

  return (
    <div>
      <Button
        sx={{ py: 2 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant="p1" component="p">
          {currentLocal.toUpperCase()}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={getHref('ua')}>
          <MenuItem>UA</MenuItem>
        </Link>
        <Link href={getHref('en')}>
          <MenuItem>EN</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
