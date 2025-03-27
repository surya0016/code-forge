import ProblemSolvingPlatform from '@/components/ProblemSolving'
import { db } from '@/lib/db'
import React from 'react'

const page = async({params}:{params:{problemId: string}}) => {
  const problem = await db.problem.findUnique({
    where:{
      id:Number(params.problemId),
    },
    include:{
      testCases:true
    }
  })

  if (!problem) {
    return <div>Problem not found</div>; // Handle missing problem case
  }

  return (
    <div>
      <ProblemSolvingPlatform problem={problem}/>
    </div>
  )
}

export default page