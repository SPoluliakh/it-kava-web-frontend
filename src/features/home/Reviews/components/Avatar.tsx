import Image from 'next/image';
import { MdAccountCircle } from 'react-icons/md';
import { Box } from '@mui/material';

interface Props {
  src: string;
}

export const Avatar = ({ src }: Props) => (
  <Box
    sx={{
      fontSize: '48px',
      color: 'primary.c500',
      ['& svg']: { display: 'block' },
    }}
  >
    {src ? <Image src={src} alt="Avatar" width={48} height={48} /> : <MdAccountCircle />}
  </Box>
);
