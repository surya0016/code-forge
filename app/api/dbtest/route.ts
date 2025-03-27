import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    const problems = await db.problem.findFirst({
      where:{
        id: 3
      }
    })

    console.log(problems)
    return NextResponse.json(problems)
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Error",{status:500})
  }
}

export async function POST(req:Request){
  try {
    const problem = await db.problem.create({
      data:{
        title:"",
        description:"",
        difficulty:"Hard",
      }
    })
  } catch (error) {
    
  }
}