import { Typography } from '@mui/material';
import { PortfolioLinkContainer } from './PortfolioLinkContainer';
import { PortfolioLinkTextBlock } from './PortfolioLinkTextBlock';
import { PortfolioLinkLogo } from './PortfolioLinkLogo';
import { PortfolioLinkText } from './PortfolioLinkText';
import { PortfolioLinkIcon } from './PortfolioLinkIcon';

interface Props {
  text: string;
  href: string;
  logoUrl: string;
  bgUrl: string;
}

export const PortfolioLink = ({ text, href, logoUrl, bgUrl }: Props) => (
  <PortfolioLinkContainer href={href} bgUrl={bgUrl}>
    <PortfolioLinkTextBlock>
      <Typography variant="h1" component="p" color="transparent" sx={{ userSelect: 'none' }}>
        Лого
      </Typography>
      <Typography variant="p3" component="p" color="transparent" sx={{ userSelect: 'none' }}>
        {text}
      </Typography>
      <PortfolioLinkLogo logoUrl={logoUrl} />
      <PortfolioLinkText text={text} />
    </PortfolioLinkTextBlock>
    <PortfolioLinkIcon />
  </PortfolioLinkContainer>
);
