import { SwiperSlide } from 'swiper/react';
import { SxProps, Theme } from '@mui/material';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { SwiperNavBtn } from '@/common/components/SwiperNavBtn';
import { useVariantSwiper } from '@/common/hooks';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { PortfolioLink } from './PortfolioLink';
import { usePortfolioList } from '../hooks';
import { StyledSwiper } from '@/common/components/styled';

interface Props {
  sx?: SxProps<Theme>;
  dictionary: IHomeDictionary['portfolio']['projectList'];
}

export const PortfolioSwiper = ({ sx, dictionary }: Props) => {
  const { sx: style, swiperOptions } = useVariantSwiper('portfolio');
  const portfolioList = usePortfolioList(dictionary);

  return (
    <StyledSwiper sx={{ ...style, ...sx }} {...swiperOptions}>
      {portfolioList.map(it => (
        <SwiperSlide key={it.name}>
          <PortfolioLink href={it.href} text={it.name} logoUrl={it.logoUrl} bgUrl={it.bgUrl} />
        </SwiperSlide>
      ))}
      <SwiperNavBtn variant="prev">
        <IoIosArrowUp />
      </SwiperNavBtn>
      <SwiperNavBtn variant="next">
        <IoIosArrowDown />
      </SwiperNavBtn>
    </StyledSwiper>
  );
};
