import { InvestmentFormProps, InvestmentSummaryProps } from "@/types/InvestmentFormProps";
import { formatCurrencyFull } from "@/utils/formatCurrency";

export default function InvestmentSummaryCard({
  addAmount,
  frequency
}: InvestmentSummaryProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-5">
      <p className="text-sm font-semibold">INVESTMENT SUMMARY</p>
      <div className="flex flex-row justify-between">
        <p>Amount</p>
        <p>{formatCurrencyFull(addAmount)}</p>
      </div>

       <div className="flex flex-row justify-between">
        <p>Frequency</p>
        <p>{frequency}</p>
      </div>

      <div className="flex flex-row justify-between">
        <p>Management Fee</p>
        <p>0.25% / yr</p>
      </div>

      <div className="flex flex-row justify-between">
        <p>Processing</p>
        <p>Free</p>
      </div>

    </div>
  )
}