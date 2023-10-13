import '@/styles/globals.css';
import { i18n, TLocale } from '@/i18n-config';
import { montserrat } from '@/common/fonts';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function NotFoundLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: TLocale };
}) {
  return (
    <html lang={params.lang}>
      <body className={[montserrat.variable, montserrat.className].join(' ')}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <main
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
