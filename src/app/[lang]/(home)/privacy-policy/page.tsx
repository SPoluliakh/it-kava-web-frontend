import { Metadata } from 'next';
import { PrivacyPolicyFeature } from '@/features/privacy-policy';
import { TLocale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export const metadata: Metadata = {
  title: 'Privacy policy | ItKava',
  description: 'our projects',
};

export default async function PrivacyPolicyPage({
  params: { lang },
}: {
  params: { lang: TLocale };
}) {
  const dictionary = await getDictionary.privacyPolicy(lang);
  return <PrivacyPolicyFeature dictionary={dictionary} />;
}
