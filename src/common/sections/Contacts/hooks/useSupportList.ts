import contactSupportListData from '@/data/contacts-support-list.json';

const contactSupportList = contactSupportListData as string[];

export const useSupportList = () => contactSupportList;
