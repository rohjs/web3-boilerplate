import type { Metadata } from 'next'

import Providers from 'lib/providers'
import StyledComponentsRegistry from 'lib/StyledComponentsRegistery'
import GlobalStyles from 'styles/GlobalStyles'
import 'styles/globals.css'

import ErrorBoundary from 'components/ErrorBoundary'

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
            <div style={{ background: 'black', color: 'white' }}>Gnb</div>

            <Providers>{children}</Providers>

            <div style={{ background: 'black', color: 'white' }}>Footer</div>
          </StyledComponentsRegistry>
        </ErrorBoundary>
      </body>
    </html>
  )
}
