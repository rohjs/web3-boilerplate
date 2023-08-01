import type { Metadata } from 'next'

import Providers from 'lib/providers'
import StyledComponentsRegistry from 'lib/StyledComponentsRegistery'
import GlobalStyle from 'styles/global-style'
import 'styles/globals.css'

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
        <StyledComponentsRegistry>
          <GlobalStyle />
          <div style={{ background: 'black', color: 'white' }}>Gnb</div>

          <Providers>{children}</Providers>

          <div style={{ background: 'black', color: 'white' }}>Footer</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
