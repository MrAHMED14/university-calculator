import { ValuesNoteType } from "@/lib/types/global"

const staticValues = {
  examScore: 0.0,
  tdScore: 0.0,
  tpScore: 0.0,
  moduleMoy: 0.0,
  moduleMoyCof: 0,
}

const INFO_L3_ISIL_STATIC = {
  totalCoefficientSum: 17,
  totalCreditSum: 30,
  coefficientSum: {
    Fondamentale1: 6,
    Fondamentale2: 6,
    Methodologique: 4,
    Transversale: 1,
  },
  creditSum: {
    Fondamentale1: 10,
    Fondamentale2: 10,
    Methodologique: 8,
    Transversale: 2,
  },
  // ------------ //
  unityMoy: {
    Fondamentale1: 0.0,
    Fondamentale2: 0.0,
    Methodologique: 0.0,
    Transversale: 0.0,
  },
  creditSumMoy: {
    Fondamentale1: 0,
    Fondamentale2: 0,
    Methodologique: 0,
    Transversale: 0,
  },
  finalResult: 0.0,
  totalCreditSumMoy: 0,
}

const INFO_L3_ISIL_DATA: ValuesNoteType[] = [
  {
    title: "semaster 1",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Système d'information distribué",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "Système d'aide à la décision",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
      ],

      Fondamentale2: [
        {
          moduleName: "Génie Logiciel",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
        {
          moduleName: "Interface Homme Machine",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
      ],

      Methodologique: [
        {
          moduleName: "Administration des Systèmes d'information",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Methodologique",
          ...staticValues,
        },
        {
          moduleName: "Programmation avancée pour le Web",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Methodologique",
          ...staticValues,
        },
      ],

      Transversale: [
        {
          moduleName: "Economie numérique et veille stratégique",
          coefficient: 1,
          credit: 2,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Transversale",
          ...staticValues,
        },
      ],
    },
    ...INFO_L3_ISIL_STATIC,
  },
  {
    title: "semaster 2",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Recherche d'information",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "Sécurité Informatique",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Fondamentale1",
          ...staticValues,
        },
      ],

      Fondamentale2: [
        {
          moduleName: "Données semi structurées",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
        {
          moduleName: "Système d'exploitation 2",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
      ],

      Methodologique: [
        {
          moduleName: "Projet",
          coefficient: 3,
          credit: 6,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Methodologique",
          ...staticValues,
        },
        {
          moduleName: "Business Intelligence",
          coefficient: 1,
          credit: 2,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "TD",
          unityType: "Methodologique",
          ...staticValues,
        },
      ],

      Transversale: [
        {
          moduleName: "Rédaction Scientifique",
          coefficient: 1,
          credit: 2,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Transversale",
          ...staticValues,
        },
      ],
    },
    ...INFO_L3_ISIL_STATIC,
  },
]

export const INFO_L3_ISIL = {
  title: "Informatique 3 LMD ISIL",
  etablissement: "Université Ibn khaldoun Tiaret",
  slug: "info-l3-isil",
  data: INFO_L3_ISIL_DATA,
}
