import { IPrivacyPolicyDictionary } from '@/common/interfaces/data/locale';
import { Container, Typography } from '@mui/material';

interface Props {
  dictionary: IPrivacyPolicyDictionary['content'];
}

export const Content = ({ dictionary }: Props) => (
  <Container sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
    {dictionary.text.map((it, i) => (
      <Typography key={i} variant="p3" component="p">
        {it}
      </Typography>
    ))}
  </Container>
);
