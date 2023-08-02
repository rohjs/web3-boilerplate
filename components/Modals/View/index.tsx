import dynamic from 'next/dynamic'

import { ModalType } from 'config/constants'
import { assertUnreachable } from 'utils/assertUnreachable'

const ConnectModal = dynamic(() => import('./ConnectModal'), {
  suspense: true,
})

type ModalViewProps = {
  modal: Modal
}

export default function ModalView({ modal }: ModalViewProps) {
  return renderModal(modal)
}

function renderModal(modal: Modal) {
  const { type, props } = modal

  switch (type) {
    case ModalType.Connect:
      return <ConnectModal />

    default:
      assertUnreachable(modal.type)
  }
}
