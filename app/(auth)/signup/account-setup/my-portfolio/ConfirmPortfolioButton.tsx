'use client'

import { PortfolioWeights } from "@/types/PortfolioWeights"
import { makePortfolio } from "./actions"

export default function ConfirmPortfolioButton(weights: PortfolioWeights) {
  function handleClick() {
    makePortfolio(weights)
  }

  return (
    <button onClick={handleClick}>
      Next
    </button>
  )
}