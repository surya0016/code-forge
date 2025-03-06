import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string
}

export async function GET(
  req: Request,
){
  return NextResponse.json({message:"Hello!!!"})
}