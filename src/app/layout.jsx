import localFont from 'next/font/local'
import './styles/global.scss'
import './styles/nullstyles.scss'
import './styles/variables.scss'
import { Header } from '@/modules/Header/Header'
import { Footer } from '../modules/Footer/Footer'
import { metadata } from './data/metadata'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import Error from './dashboard/error'
import { Toolbar } from '@/modules/Toolbar/Toolbar'
import { UpBtn } from '@/modules/UpBtn/UpBtn'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toolbar />
        <Header />
        <ErrorBoundary fallback={<Error />}>
          <main>{children}</main>
        </ErrorBoundary>
        <UpBtn />
        <Footer />
      </body>
    </html>
  )
}
export default RootLayout
