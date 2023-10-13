import { Metadata } from 'next';
import { ContactsFeature } from '@/features';

export const metadata: Metadata = {
  title: 'Contacts | ItKava',
  description: 'ITKava contacts',
};

export default async function ContactsPage() {
  return <ContactsFeature />;
}
