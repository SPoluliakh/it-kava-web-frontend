import { Stack, Typography } from '@mui/material';
import { useSocialList, useSupportList, useInfoDictionary } from '../hooks';
import { IconButton } from '@/common/components';

export const ContactsList = () => {
  const supportList = useSupportList();
  const socialList = useSocialList();
  const dictionary = useInfoDictionary();
  return (
    <Stack
      direction={{ xs: 'row', xs1: 'column' }}
      gap={{ sm: 4 }}
      sx={{
        justifyContent: { xs: 'space-between', xs1: 'flex-start' },
      }}
    >
      <Stack>
        <Typography variant="h3" color="secondary.c900" sx={{ mb: 0.5 }}>
          {dictionary.support.title}
        </Typography>
        <Stack>
          {supportList.map(it => (
            <Typography key={it} variant="p3" color="secondary.c800">
              {it}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="h3" sx={{ mb: 1 }}>
          {dictionary.connect.title}
        </Typography>
        <Stack direction="row" gap={2}>
          {socialList.map((it, i) => (
            <IconButton target="_blank" key={i} href={it.url} variant="icon">
              <it.icon />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
