import { useState } from "react"
import Link from "next/link"
import { constants } from "ethers"
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi"

import { networkId } from "config/networks"
import { Erc20Abi } from "config/abi"

import { StyledSample } from "./styled"
import Button from "components/Button"

const LAUNCHPAD_ADDRESS = "0x8ceA0d0C0307d05D6C492DA139DbEb7eC0127179"
const DEMO_TOKEN_ADDRESS = "0xD404e4360da3ea40118972aD1b20d67a53cbf48F"

export function Sample() {
  const [approveHash, setApproveHash] = useState<`0x${string}` | null>(null)
  const [revokeHash, setRevokeHash] = useState<`0x${string}` | null>(null)

  const { isConnected } = useAccount()

  // NOTE: 1) Configure tx
  // https://wagmi.sh/docs/prepare-hooks/usePrepareContractWrite
  const { config: approveConfig } = usePrepareContractWrite({
    address: DEMO_TOKEN_ADDRESS,
    abi: Erc20Abi as any[],
    chainId: networkId,
    functionName: "approve",
    args: [LAUNCHPAD_ADDRESS, constants.MaxUint256],
    enabled: !!isConnected,
  })

  const { config: revokeConfig } = usePrepareContractWrite({
    address: DEMO_TOKEN_ADDRESS,
    abi: Erc20Abi as any[],
    chainId: networkId,
    functionName: "approve",
    args: [LAUNCHPAD_ADDRESS, "0"],
    enabled: !!isConnected,
  })

  // NOTE: 2) Create tx writeFn
  // https://wagmi.sh/docs/hooks/useContractWrite
  const { writeAsync: approveWriteAsync } = useContractWrite(approveConfig)
  const { writeAsync: revokeWriteAsync } = useContractWrite(revokeConfig)

  // NOTE: 3) Impl event handler
  async function approve() {
    try {
      const response = await approveWriteAsync?.()
      setApproveHash(response?.hash ?? null)
    } catch (err) {
      console.error(err)
    }
  }
  async function revoke() {
    try {
      const response = await revokeWriteAsync?.()
      setRevokeHash(response?.hash ?? null)
    } catch (err) {
      console.error(err)
    }
  }

  // NOTE: 4) Check tx status
  // https://wagmi.sh/docs/hooks/useWaitForTransaction
  useWaitForTransaction({
    chainId: networkId,
    hash: approveHash!,
    enabled: !!approveHash,
    onSuccess() {
      setApproveHash(null)
    },
  })

  useWaitForTransaction({
    chainId: networkId,
    hash: revokeHash!,
    enabled: !!revokeHash,
    onSuccess() {
      setRevokeHash(null)
    },
  })

  const hash = approveHash ?? revokeHash

  return (
    <StyledSample>
      <div className="buttonGroup">
        <Button
          onClick={approve}
          disabled={!!approveHash}
          leftIcon={approveHash ? "loading" : undefined}
        >
          Approve DEMO TOKEN
        </Button>

        <Button
          onClick={revoke}
          disabled={!!revokeHash}
          $variant="secondary"
          leftIcon={revokeHash ? "loading" : undefined}
        >
          Revoke DEMO TOKEN
        </Button>
      </div>

      {hash && (
        <Link
          className="hash"
          href={`https://testnet.bscscan.com/tx/${hash}`}
          target="_blank"
        >
          Open BscScan
        </Link>
      )}
    </StyledSample>
  )
}
