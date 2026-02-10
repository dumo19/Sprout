export default function TotalBalanceCard() {
  let balance = "$234,874.87"
  return (
    <div className="p-2">
      <div className="font-regular text-2xl">Total Balance</div>
      <div className="font-semibold text-3xl">{balance}</div>
    </div>
  )
}