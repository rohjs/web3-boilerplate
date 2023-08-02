'use client'

import { useAccount, useMediaQuery } from '@/hooks'

export default function Effects() {
  useAccount()
  useMediaQuery()

  return null
}
