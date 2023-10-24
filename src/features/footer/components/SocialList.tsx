import { IconButton } from '@/common/components';
import { ISocialItem } from '@/common/sections/Contacts/interfaces';
import { Stack } from '@mui/material';

interface Props {
  socialList: ISocialItem[];
}

export const SocialList = ({ socialList }: Props) => {
  return (
    <Stack direction="row" gap={2}>
      {socialList.map((it, i) => (
        <IconButton
          key={i}
          href={it.url}
          target="_blank"
          variant="icon"
          sx={{ color: 'secondary.c50' }}
        >
          <it.icon />
        </IconButton>
      ))}
    </Stack>
  );
};
