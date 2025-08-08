import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://garantgruz.ru'),
  title: {
    default: 'GARANT - Грузоперевозки по Крыму | Газель, манипулятор, бортовые машины',
    template: '%s | GARANT - Грузоперевозки по Крыму'
  },
	description: 'Надежные грузоперевозки по всему Крыму от компании GARANT. Машины с пирамидой, бортовые машины, манипуляторы. Симферополь, Севастополь, Ялта, Керчь. Звоните: +7 (978) 863-11-97',
  keywords: [
    'грузоперевозки Крым',
    'газель Симферополь',
    'манипулятор',
    'бортовые машины',
    'доставка грузов',
    'перевозка мебели',
    'грузовое такси',
    'GARANT перевозки'
  ],
  authors: [{ name: 'GARANT' }],
  creator: 'GARANT',
  publisher: 'GARANT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'GARANT - Грузоперевозки по Крыму',
    description: 'Профессиональные грузоперевозки по всему Крыму. Газели с пирамидой, бортовые машины, манипуляторы.',
    url: 'https://garantgruz.ru',
    siteName: 'GARANT',
    locale: 'ru_RU',
    type: 'website',
  }, 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
  canonical: 'https://garantgruz.ru', 
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
		<link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
