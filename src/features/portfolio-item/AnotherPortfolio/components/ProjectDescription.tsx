import { Stack, SxProps, Theme, Typography } from '@mui/material';
import { IPortfolioItemDictionary } from '@/common/interfaces/data/locale';

interface Props {
  dictionary: IPortfolioItemDictionary['anotherPortfolio']['project'];
  sx?: SxProps<Theme>;
}

export const ProjectDescription = ({ dictionary, sx }: Props) => (
  <Stack
    direction={{ sm: 'row' }}
    justifyContent={{ sm: 'space-between' }}
    gap={3}
    sx={{ color: 'secondary.c900', ...sx }}
  >
    <Stack gap={2}>
      <Typography variant="p1" component="p">
        {dictionary.name}
      </Typography>
      <Stack gap={1} flexWrap="wrap">
        <Typography variant="p2" component="p" sx={{ py: 0.5 }}>
          {dictionary.tag}
        </Typography>
      </Stack>
    </Stack>

    <Typography variant="p3" component="p" sx={{ maxWidth: '616px' }}>
      {dictionary.description}
    </Typography>
  </Stack>
);
