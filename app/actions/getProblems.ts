"use server"

import { db } from "@/lib/db"

export const getProblems = async () => {
  try {
    const problems = await db.problem.findMany({
      include:{
        tags:{
          include:{
            tag:true
          }
        }
      }
    })
    
    return problems

  } catch (error) {
    console.log("[GET_PROBLEMS]",error)
  }
}