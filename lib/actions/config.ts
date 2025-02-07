"use server"

import prisma from "../prisma"
import { DynamicCalculatorType } from "../types/global"

export async function createConfig(config: DynamicCalculatorType) {
  try {
    const data = await prisma.config.create({
      data: {
        ...config,
      },
    })

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function getConfigById(id: string) {
  if (!id) {
    throw new Error("ID is required")
  }

  try {
    const data = await prisma.config.findUnique({
      where: { id },
    })

    return data
  } catch (error) {
    console.error(error)
  }
}
