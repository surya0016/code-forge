import React from 'react'
import ProblemList from './ClientProblemList'
import ProblemTable from '../problems/components/ProblemTable'

const page = () => {
  return (
    <ProblemList>
      <ProblemTable/>
    </ProblemList>
  )
}

export default page