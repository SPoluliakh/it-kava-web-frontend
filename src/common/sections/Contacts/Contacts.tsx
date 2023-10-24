import { Box, Container, Stack, Typography, SxProps } from '@mui/material';
import { ContactsForm, ContactsList } from './components';
import { useSectionDictionary } from '@/common/sections/Contacts/hooks/useSectionDictionary';

interface Props {
  sx?: SxProps;
}

export const Contacts = ({ sx }: Props) => {
  const dictionary = useSectionDictionary();
  return (
    <Box sx={{ pb: '64px', ...sx }}>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ alignSelf: 'center', maxWidth: '450px', mb: 4 }}>
          <Typography
            variant="subtitle2"
            component="h2"
            color="primary.c500"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {dictionary.title}
          </Typography>
          <Typography
            variant="p3"
            component="p"
            color="secondary.c800"
            sx={{ textAlign: 'center' }}
          >
            {dictionary.text}
          </Typography>
        </Box>
        <Stack
          direction={{ xs1: 'row' }}
          gap={{ xs: 4, md: '138px' }}
          sx={{ mx: { xs: 0, xs1: 'auto' }, alignItems: 'center' }}
        >
          <ContactsForm />
          <ContactsList />
        </Stack>
      </Container>
    </Box>
  );
};
