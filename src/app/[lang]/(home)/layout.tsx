import '@/styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { HeaderFeature, FooterFeature } from '@/features';
import { i18n, TLocale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { merriweather, montserrat } from '@/common/fonts';

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: TLocale };
}) {
  const dictionary = await getDictionary.common(params.lang);
  return (
    <html lang={params.lang}>
      <body
        className={[montserrat.variable, montserrat.className, merriweather.variable].join(' ')}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <HeaderFeature dictionary={dictionary.header} />
          <main
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </main>
          <FooterFeature />
        </div>
      </body>
    </html>
  );
}
