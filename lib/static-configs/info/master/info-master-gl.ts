import { ValuesNoteType } from "@/lib/types/global"
import { INFO_MASTER_S4_STATIC, staticValues } from "./utils"

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
const INFO_M1_GL_DATA: ValuesNoteType[] = [
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

/*--------------------------------*/

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
export const INFO_M2_GL_DATA: ValuesNoteType[] = [
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

/*--------------------------------*/

export const INFO_M1_GL = {
  title: "Master 1 Génie Logiciel",
  etablissement: "Université Ibn khaldoun Tiaret",
  slug: "info-m1-gl",
  data: INFO_M1_GL_DATA,
}

export const INFO_M2_GL = {
  title: "Master 2 Génie Logiciel",
  etablissement: "Université Ibn khaldoun Tiaret",
  slug: "info-m2-gl",
  data: INFO_M2_GL_DATA,
}
