import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export type HandleValueChange = (evt: React.SyntheticEvent<Element, Event>, id: number) => void;

type HandleChange = (value: string) => void;

type HandleExpandedChange = (value: boolean) => void;

interface Props {
  expanded: string | boolean;
  selectedItem: string;
  portfolioVariant: { name: string; href: string }[];
  handlePanelChange: HandleChange;
  handleMenuItemClick: HandleChange;
  handleExpandedChange: HandleExpandedChange;
}

export const MobilePortfolioTabsItem = ({
  expanded,
  selectedItem,
  portfolioVariant,
  handlePanelChange,
  handleMenuItemClick,
  handleExpandedChange,
}: Props) => (
  <Accordion
    expanded={expanded === 'panel'}
    onChange={handlePanelChange('panel')!}
    sx={{
      borderRadius: '4px',
      width: '100%',
      maxWidth: '342px',
      backgroundColor: 'primary.c500',
      color: 'secondary.c50',
      mb: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{
        width: '242px',
        height: '48px',

        '&.Mui-expanded': {
          minHeight: '45px',
        },

        '& .Mui-expanded': {
          color: 'secondary.c50',
          m: '0',
        },
        '& .MuiAccordionSummary-expandIconWrapper': {
          color: 'secondary.c50',
        },
      }}
    >
      <Typography variant="p3" sx={{ m: 'auto' }}>
        {selectedItem}
      </Typography>
    </AccordionSummary>
    <AccordionDetails
      sx={{
        p: '0',
        backgroundColor: 'primary.c500',
      }}
    >
      {portfolioVariant.map(({ name }) => (
        <Typography
          variant="p3"
          component="p"
          key={name}
          onClick={() => {
            handleMenuItemClick(name);
            handleExpandedChange(false);
          }}
          sx={{
            p: '9px',
            borderTop: ' 1px solid #FFF',
          }}
        >
          {name}
        </Typography>
      ))}
    </AccordionDetails>
  </Accordion>
);
