import { StaticCalculatorType } from "../types/global"
import { INFO_L2 } from "./info/lmd/info-lmd-2"
import { INFO_L3_ISIL } from "./info/lmd/info-lmd-3-isil"
import { INFO_M1_GI, INFO_M2_GI } from "./info/master/info-master-gi"
import { INFO_M1_GL, INFO_M2_GL } from "./info/master/info-master-gl"
import { INFO_M1_IAD, INFO_M2_IAD } from "./info/master/info-master-iad"

export const staticCalculator: StaticCalculatorType[] = [
  INFO_L2,
  INFO_L3_ISIL,

  INFO_M1_GL,
  INFO_M2_GL,

  INFO_M1_GI,
  INFO_M2_GI,

  INFO_M1_IAD,
  INFO_M2_IAD,
]

export function findStaticCalculator(
  slug: string
): StaticCalculatorType | null {
  for (const calculator of staticCalculator) {
    if (calculator.slug === slug) {
      return calculator
    }
  }
  return null
}
