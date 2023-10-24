import { Stack } from '@mui/material';
import { IHomeDictionary } from '@/common/interfaces/data/locale';
import { ServiceItem } from './ServiceItem';
import { useServiceItemList } from '../hooks';

interface Props {
  dictionary: IHomeDictionary['services']['serviceItemList'];
}

export const ServiceItemList = ({ dictionary }: Props) => {
  const serviceItemList = useServiceItemList(dictionary);
  return (
    <Stack
      gap={1}
      sx={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: { xs1: '348px', sm: '100%' },
      }}
    >
      {serviceItemList.map(it => (
        <ServiceItem key={it.name} text={it.name} href={it.href} />
      ))}
    </Stack>
  );
};
