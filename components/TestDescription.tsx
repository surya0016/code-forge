import React from 'react'

const TestDescription = () => {
  const twoSumDescription = `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given an array of integers <code class="bg-gray-200 px-1 rounded">nums</code> and an integer <code class="bg-gray-200 px-1 rounded">target</code>, 
      return <strong>indices</strong> of the two numbers such that they add up to <code class="bg-gray-200 px-1 rounded">target</code>.
    </p>
    <p class="text-gray-700">
      You may assume that each input would have exactly <strong>one solution</strong>, 
      and you may not use the same element twice.
    </p>
    <p class="text-gray-700">
      You can return the answer in <strong>any order</strong>.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> nums = [2,7,11,15], target = 9</p>
      <p><strong>Output:</strong> [0,1]</p>
      <p class="text-gray-600"><strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0,1].</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Example 2:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> nums = [3,2,4], target = 6</p>
      <p><strong>Output:</strong> [1,2]</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Example 3:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> nums = [3,3], target = 6</p>
      <p><strong>Output:</strong> [0,1]</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
      <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
      <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
      <li>Only one valid answer exists.</li>
    </ul>
  </div>
`;


  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: twoSumDescription}}/>
    </div>
  )
}

export default TestDescription
