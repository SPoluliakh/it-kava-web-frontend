import trustLogoListData from '@/data/trust-logo-list.json';

const trustLogoList = trustLogoListData as string[];

export const useTrust = () => trustLogoList;
