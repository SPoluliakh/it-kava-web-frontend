import { Box, Container, Stack, Typography } from '@mui/material';
import { IAboutDictionary } from '@/common/interfaces/data/locale';
import { DecoratedListItem, ItemListIcon } from './components';
import { useService } from './hooks';

interface Props {
  dictionary: IAboutDictionary['services'];
}

export const Services = ({ dictionary }: Props) => {
  const serviceList = useService(dictionary.list);
  return (
    <Box
      sx={{
        color: 'secondary.c900',
        backgroundColor: 'secondary.c50',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { sm: 'space-between' },
          gap: 4,
        }}
      >
        <Box sx={{ maxWidth: '532px' }}>
          <Typography variant="h2" component="h2" color="primary.c500" sx={{ mb: 2 }}>
            {dictionary.title}
          </Typography>
          <Typography variant="subtitle2" component="p">
            {dictionary.subtitle}
          </Typography>
        </Box>
        <Stack gap={2} sx={{ maxWidth: '700px' }}>
          {serviceList.map((it, i, arr) => (
            <DecoratedListItem key={i}>
              <Typography variant="h1" component="p" sx={{ mb: 2 }}>
                {it.title}
              </Typography>
              <Typography variant="p3" component="p">
                {it.text}
              </Typography>
              <ItemListIcon last={arr.length === i + 1} Icon={it.Icon} />
            </DecoratedListItem>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
