import { ChevronDownIcon } from '@/common/icons';
import { Stack } from '@mui/material';
import { FC } from 'react';

interface Props {
  last: boolean;
  Icon: FC;
}

export const ItemListIcon = ({ last, Icon }: Props) => (
  <Stack
    justifyContent="space-between"
    alignItems="center"
    className="item-icon"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      '&::before': !last
        ? {
            content: '""',
            position: 'absolute',
            bottom: '1px',
            width: '2px',
            height: 'calc(100% - 64px - 1px)',
            backgroundColor: 'secondary.c900',
          }
        : undefined,
    }}
  >
    <Icon />
    {!last && <ChevronDownIcon className="chevron" />}
  </Stack>
);
