import { StaticCalculatorType, ValuesNoteType } from "./types/global"

const staticValues = {
  examScore: 0.0,
  tdScore: 0.0,
  tpScore: 0.0,
  moduleMoy: 0.0,
  moduleMoyCof: 0,
}

const INFO_MASTER_S4_STATIC: ValuesNoteType = {
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

// -------------------------------------- //

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

export const INFO_L3_ISIL: ValuesNoteType[] = [
  {
    title: "semaster 1",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Système d'information distribué",
          coefficient: 4,
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
          coefficient: 4,
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
          examWeight: 0,
          tdTpWeight: 100,
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

// -------------------------------------- //

const INFO_M1_GL_S1_STATIC = {
  totalCoefficientSum: 16,
  totalCreditSum: 30,
  coefficientSum: {
    Fondamentale1: 5,
    Fondamentale2: 4,
    Methodologique: 4,
    Decouverte: 2,
    Transversale: 1,
  },
  creditSum: {
    Fondamentale1: 10,
    Fondamentale2: 8,
    Methodologique: 9,
    Decouverte: 2,
    Transversale: 1,
  },
  // ------------ //
  unityMoy: {
    Fondamentale1: 0.0,
    Fondamentale2: 0.0,
    Methodologique: 0.0,
    Decouverte: 0.0,
    Transversale: 0.0,
  },
  creditSumMoy: {
    Fondamentale1: 0,
    Fondamentale2: 0,
    Methodologique: 0,
    Decouverte: 0,
    Transversale: 0,
  },
  finalResult: 0.0,
  totalCreditSumMoy: 0,
}
const INFO_M1_GL_S2_STATIC = {
  totalCoefficientSum: 16,
  totalCreditSum: 30,
  coefficientSum: {
    Fondamentale1: 4,
    Fondamentale2: 5,
    Methodologique: 4,
    Decouverte: 2,
    Transversale: 1,
  },
  creditSum: {
    Fondamentale1: 8,
    Fondamentale2: 10,
    Methodologique: 9,
    Decouverte: 2,
    Transversale: 1,
  },
  // ------------ //
  unityMoy: {
    Fondamentale1: 0.0,
    Fondamentale2: 0.0,
    Methodologique: 0.0,
    Decouverte: 0.0,
    Transversale: 0.0,
  },
  creditSumMoy: {
    Fondamentale1: 0,
    Fondamentale2: 0,
    Methodologique: 0,
    Decouverte: 0,
    Transversale: 0,
  },
  finalResult: 0.0,
  totalCreditSumMoy: 0,
}

export const INFO_M1_GL: ValuesNoteType[] = [
  {
    title: "semaster 1",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Génie Logiciel",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "Programmation fonctionnelle",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
      ],

      Fondamentale2: [
        {
          moduleName: "Base de Données et Data Maining",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
        {
          moduleName: "Archetecture et Administration de SGBD",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
      ],

      Methodologique: [
        {
          moduleName: "Compléxité Algorithmique",
          coefficient: 2,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Methodologique",
          ...staticValues,
        },
        {
          moduleName: "Gestion de la Qualité",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Methodologique",
          ...staticValues,
        },
      ],

      Decouverte: [
        {
          moduleName: "Logique pour intelligence artificielle",
          coefficient: 2,
          credit: 2,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Decouverte",
          ...staticValues,
        },
      ],

      Transversale: [
        {
          moduleName: "Anglais 1",
          coefficient: 1,
          credit: 1,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Transversale",
          ...staticValues,
        },
      ],
    },
    ...INFO_M1_GL_S1_STATIC,
  },
  {
    title: "semaster 2",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Spécification et Conception Logiciels",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "Architecture et Devloppement  Logiciels",
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
          moduleName: "Construction d'Applications Réparties",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
        {
          moduleName: "Programmation Web",
          coefficient: 1,
          credit: 2,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale2",
          ...staticValues,
        },
        {
          moduleName: "Fondement de l' Intelligence artificielle",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Fondamentale2",
          ...staticValues,
        },
      ],

      Methodologique: [
        {
          moduleName: "Validation Formelle des Système Informatique",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Methodologique",
          ...staticValues,
        },
        {
          moduleName: "Mathématique Appliqués",
          coefficient: 2,
          credit: 4,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD",
          unityType: "Methodologique",
          ...staticValues,
        },
      ],

      Decouverte: [
        {
          moduleName: "Sécurité Informatique",
          coefficient: 2,
          credit: 2,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Decouverte",
          ...staticValues,
        },
      ],

      Transversale: [
        {
          moduleName: "Anglais 2",
          coefficient: 1,
          credit: 1,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Transversale",
          ...staticValues,
        },
      ],
    },
    ...INFO_M1_GL_S2_STATIC,
  },
]

// -------------------------------------- //

const INFO_M2_GL_S3_STATIC = {
  totalCoefficientSum: 17,
  totalCreditSum: 30,
  coefficientSum: {
    Fondamentale1: 9,
    Methodologique: 5,
    Decouverte: 1,
    Transversale: 2,
  },
  creditSum: {
    Fondamentale1: 18,
    Methodologique: 9,
    Decouverte: 1,
    Transversale: 2,
  },
  // ------------ //
  unityMoy: {
    Fondamentale1: 0.0,
    Fondamentale2: 0.0,
    Methodologique: 0.0,
    Decouverte: 0.0,
    Transversale: 0.0,
  },
  creditSumMoy: {
    Fondamentale1: 0,
    Fondamentale2: 0,
    Methodologique: 0,
    Decouverte: 0,
    Transversale: 0,
  },
  finalResult: 0.0,
  totalCreditSumMoy: 0,
}

export const INFO_M2_GL: ValuesNoteType[] = [
  {
    title: "semaster 1",
    groupedModules: {
      Fondamentale1: [
        {
          moduleName: "Dév App Mob sous Android",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "Maintenance Logicielles",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
        {
          moduleName: "XML Avancé et Web 2.0",
          coefficient: 3,
          credit: 6,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TP",
          unityType: "Fondamentale1",
          ...staticValues,
        },
      ],

      Methodologique: [
        {
          moduleName: "Gestion des projets Informatique",
          coefficient: 3,
          credit: 5,
          examWeight: 60,
          tdTpWeight: 40,
          examType: "TD_TP",
          unityType: "Methodologique",
          ...staticValues,
        },
        {
          moduleName: "Techniques Expression et de RS",
          coefficient: 2,
          credit: 4,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Methodologique",
          ...staticValues,
        },
      ],

      Decouverte: [
        {
          moduleName: "Législation et Déont Travail",
          coefficient: 1,
          credit: 1,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Decouverte",
          ...staticValues,
        },
      ],

      Transversale: [
        {
          moduleName: "Anglais 3",
          coefficient: 2,
          credit: 2,
          examWeight: 100,
          tdTpWeight: 0,
          examType: "none",
          unityType: "Transversale",
          ...staticValues,
        },
      ],
    },
    ...INFO_M2_GL_S3_STATIC,
  },
  {
    ...INFO_MASTER_S4_STATIC,
  },
]

// -------------------------------------- //

export const staticCalculator: StaticCalculatorType[] = [
  {
    title: "Informatique 3 LMD ISIL",
    etablissement: "Université Ibn khaldoun Tiaret",
    slug: "info-l3-isil",
    data: INFO_L3_ISIL,
  },
  {
    title: "Master 1 Génie Logiciel",
    etablissement: "Université Ibn khaldoun Tiaret",
    slug: "info-m1-gl",
    data: INFO_M1_GL,
  },
  {
    title: "Master 2 Génie Logiciel",
    etablissement: "Université Ibn khaldoun Tiaret",
    slug: "info-m2-gl",
    data: INFO_M2_GL,
  },
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
// -------------------------------------- //
