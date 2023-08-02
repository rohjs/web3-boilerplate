import { useSwitchNetwork as _useSwitchNetwork } from 'wagmi'

import config from 'config'
import { useConnect } from './useConnect'
import { useRefetch } from './useRefetch'

export function useSwitchNetwork() {
  const { openConnectModal } = useConnect()

  const refetch = useRefetch()

  const { switchNetwork: _switchNetwork } = _useSwitchNetwork({
    chainId: config.chainId,
    throwForSwitchChainNotSupported: false,
    onSuccess() {
      refetch()
    },
  })

  function switchNetwork() {
    try {
      _switchNetwork?.()
    } catch (error: any) {
      if (!window.ethereum) return
      openConnectModal()
    }
  }

  function switchBeforeSend(error: any) {
    if (error.name === 'ChainMismatchError' || error.code === 'NETWORK_ERROR') {
      try {
        switchNetwork()
      } catch (error: any) {}
    }
  }

  return {
    switchNetwork,
    switchBeforeSend,
  }
}
