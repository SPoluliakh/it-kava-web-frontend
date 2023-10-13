import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI-Kit | ItKava',
};

export default function UiKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
