import { TLocale } from '@/i18n-config';
import { TSectionDictionary } from '../interfaces';

const ua = {
  title: 'Контакти',
  text: 'Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tempor nec feugiat nisl pretium fusce id velit',
};
const en = {
  title: 'Contacts',
  text: 'Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tempor nec feugiat nisl pretium fusce id velit',
};
export const sectionDictionary: Record<TLocale, TSectionDictionary> = {
  en,
  ua,
};
