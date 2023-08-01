import type { Metadata } from 'next'

import ReactQueryProvider from 'lib/providers/react-query-provider'

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
        <div style={{ background: 'black', color: 'white' }}>Gnb</div>

        <ReactQueryProvider>{children}</ReactQueryProvider>

        <div style={{ background: 'black', color: 'white' }}>Footer</div>
      </body>
    </html>
  )
}
