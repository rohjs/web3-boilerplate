import { MouseEvent } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { ConnectorId } from 'config/constants'
import { useConnect } from 'hooks'

import { StyledConnectModal } from '../styled'
import { LogoIcon } from 'components/Icons'
import { CloseButton } from 'components/Modals/shared'

export default function ConnectModal() {
  const { connect: _connect, wallets } = useConnect()

  function connect(e: MouseEvent<HTMLButtonElement>) {
    _connect(e.currentTarget.value as ConnectorId)
  }

  return (
    <StyledConnectModal>
      <header className="modalHeader">
        <div className="titleGroup">
          <h2 className="subtitle">Connect a wallet</h2>
        </div>

        <p className="desc">
          By connecting a wallet, you agree to Nine Chronicles Ltd&apos;s{' '}
          <Link href="/docs/terms" target="_blank" rel="noopener">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/docs/privacy" target="_blank" rel="noopener">
            Privacy Policy
          </Link>
          .
        </p>

        <CloseButton />
      </header>

      <div className="container">
        <div className="modalContent">
          <div className="buttonGroup">
            {wallets.map((wallet) => {
              return (
                <button
                  className={clsx('connectButton', wallet.connectorId)}
                  key={`connect:${wallet.id}`}
                  type="button"
                  onClick={connect}
                  value={wallet.connectorId}
                >
                  <LogoIcon
                    icon={wallet.connectorId as LogoIconType}
                    $size={32}
                  />
                  <span className="label">{renderLabel(wallet.title)}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </StyledConnectModal>
  )
}

function renderLabel(name?: string) {
  switch (name) {
    case 'Metamask':
      return 'Metamask'
    case 'Coinbase Wallet':
      return 'Coinbase'
    case 'WalletConnect':
      return 'WalletConnect'
    default:
      return name
  }
}
