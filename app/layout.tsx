import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import Providers from 'lib/providers'
import StyledComponentsRegistry from 'lib/StyledComponentsRegistery'
import GlobalStyles from 'styles/GlobalStyles'
import 'styles/globals.css'

import ErrorBoundary from 'components/ErrorBoundary'

import Gnb from 'components/Gnb'

const Effects = dynamic(() => import('components/Effects'), { ssr: false })

const Modals = dynamic(() => import('components/Modals'), { ssr: false })

const NetworkAlert = dynamic(() => import('components/NetworkAlert'), {
  ssr: false,
})

// TODO: SEO
export const metadata: Metadata = {
  title: 'Mini game',
  description: 'Mini game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <StyledComponentsRegistry>
            <GlobalStyles />

            <Providers>
              <NetworkAlert />
              <Gnb />
              {children}

              <Modals />
              <div id="modal" />
              <Effects />
            </Providers>

            <div style={{ background: 'black', color: 'white' }}>Footer</div>
          </StyledComponentsRegistry>
        </ErrorBoundary>
      </body>
    </html>
  )
}
