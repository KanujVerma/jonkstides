'use client'

import { useEffect } from 'react'
import { useCart } from './CartContext'

export default function ClearCartOnMount() {
  const { clear } = useCart()
  useEffect(() => { clear() }, [clear])
  return null
}
