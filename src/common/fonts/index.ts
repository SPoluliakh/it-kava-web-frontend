import { Merriweather, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  variable: '--font-montserrat',
});

export const merriweather = Merriweather({
  weight: ['700'],
  subsets: ['cyrillic'],
  display: 'swap',
  fallback: ['Times New Roman', 'serif'],
  variable: '--font-merriweather',
});
