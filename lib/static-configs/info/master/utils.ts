import { ValuesNoteType } from "@/lib/types/global"

export const staticValues = {
  examScore: 0.0,
  tdScore: 0.0,
  tpScore: 0.0,
  moduleMoy: 0.0,
  moduleMoyCof: 0,
}

export const INFO_MASTER_S4_STATIC: ValuesNoteType = {
  title: "semaster 2",
  groupedModules: {
    Fondamentale1: [
      {
        moduleName: "Projet de fin de cycle",
        coefficient: 1,
        credit: 30,
        examWeight: 100,
        tdTpWeight: 0,
        examType: "none",
        unityType: "Fondamentale1",
        ...staticValues,
      },
    ],
  },
  totalCoefficientSum: 1,
  totalCreditSum: 30,
  coefficientSum: {
    Fondamentale1: 1,
  },
  creditSum: {
    Fondamentale1: 30,
  },
  // ------------ //
  unityMoy: {
    Fondamentale1: 0.0,
  },
  creditSumMoy: {
    Fondamentale1: 0,
  },
  finalResult: 0.0,
  totalCreditSumMoy: 0,
}
