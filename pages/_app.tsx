import type { AppProps } from "next/app"
import type { DehydratedState } from "@tanstack/react-query"

import { useMediaQuery } from "hooks"

import GlobalStyle from "styles/GlobalStyle"
import Provider from "components/Provider"

type MyAppProps = AppProps & {
  pageProps: {
    dehydratedState: DehydratedState
  }
}

function MyApp({ Component, pageProps }: MyAppProps) {
  useMediaQuery()

  return (
    <Provider state={pageProps.dehydratedState}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
