import { StyledImage } from '@/common/components/styled';
import { useSize } from '../hooks';

interface Props {
  src: string;
}
export const SlideImage = ({ src }: Props) => {
  const { width, height } = useSize();
  return (
    <StyledImage
      src={src}
      alt={'screenshot'}
      width={width}
      height={height}
      sx={{ display: 'block', objectFit: 'cover', borderRadius: '4px' }}
    />
  );
};
