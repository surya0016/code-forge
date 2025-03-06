import { Code } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center mb-1'>
      <Code height={30} width={30} className='mr-1 mt-1'/><span className="font-bold text-2xl">CodeForge</span>
    </div>
  )
}

export default Logo