import ManualCalculator from "@/components/global/manual-calculator/manual-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Manual Calculator",
}

export default function ManualCalculatorPage() {
  return (
    <div className="w-full my-20">
      <ManualCalculator />
    </div>
  )
}
