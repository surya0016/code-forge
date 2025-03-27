import { Difficulty } from '@prisma/client'
import { db } from './db'

async function main() {
  // Clear existing data (in correct order to respect foreign keys)
  await db.submission.deleteMany()
  await db.solution.deleteMany()
  await db.discussion.deleteMany()
  await db.problemTag.deleteMany()
  await db.testCase.deleteMany()
  await db.problem.deleteMany()
  await db.tag.deleteMany()

  // Create tags
  const tags = await Promise.all([
    db.tag.create({
      data: {
        name: 'Array',
        description: 'Problems involving array manipulation'
      }
    }),
    db.tag.create({
      data: {
        name: 'Hash Table',
        description: 'Problems using hash maps/dictionaries'
      }
    }),
    db.tag.create({
      data: {
        name: 'Linked List',
        description: 'Problems involving linked list data structure'
      }
    }),
    db.tag.create({
      data: {
        name: 'Math',
        description: 'Mathematical problems'
      }
    }),
    db.tag.create({
      data: {
        name: 'String',
        description: 'String manipulation problems'
      }
    }),
    db.tag.create({
      data: {
        name: 'Two Pointers',
        description: 'Problems using two pointer technique'
      }
    }),
    db.tag.create({
      data: {
        name: 'Binary Search',
        description: 'Problems using binary search'
      }
    }),
    db.tag.create({
      data: {
        name: 'Dynamic Programming',
        description: 'Problems using dynamic programming'
      }
    }),
    db.tag.create({
      data: {
        name: 'Tree',
        description: 'Problems involving tree data structures'
      }
    })
  ])

  // Sample problems data
  const problemsData = [
    {
      title: "Two Sum",
      description: `
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

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li>2 ≤ nums.length ≤ 10<sup>4</sup></li>
      <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
      <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
      <li>Only one valid answer exists.</li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.45,
      tags: ['Array', 'Hash Table'],
      starterCode: `function twoSum(nums, target) {
    // Your code here
}`,
      wrappedCode: `function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}

// Test case
try {
    const startTime = process.hrtime();
    const nums = [2,7,11,15];
    const target = 9;
    const result = twoSum(nums, target);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "[2,7,11,15]\n9", output: "[0,1]" }
      ]
    },
    {
      title: "Add Two Numbers",
      description: `<div class="prose max-w-none">
    <p class="text-gray-700">
      You are given two non-empty linked lists representing two non-negative integers. 
      The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. 
      Add the two numbers and return the sum as a <strong>linked list</strong>.
    </p>
    <p class="text-gray-700">
      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]</p>
      <p><strong>Output:</strong> [7,0,8]</p>
      <p class="text-gray-600"><strong>Explanation:</strong> 342 + 465 = 807.</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>
      <li>0 ≤ Node.val ≤ 9</li>
      <li>It is guaranteed that the list represents a number that does not have leading zeros.</li>
    </ul>
  </div>`,
      difficulty: Difficulty.Medium,
      acceptanceRate: 0.34,
      tags: ['Linked List', 'Math'],
      starterCode: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
    // Your code here
}`,
      wrappedCode: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
}

// Helper function to create ListNode from array
function createList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Test case
try {
    const startTime = process.hrtime();
    const l1 = createList([2,4,3]);
    const l2 = createList([5,6,4]);
    const result = addTwoNumbers(l1, l2);
    
    // Convert result back to array
    const output = [];
    let node = result;
    while (node) {
        output.push(node.val);
        node = node.next;
    }
    
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: output,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "[2,4,3]\n[5,6,4]", output: "[7,0,8]" }
      ]
    },
    {
      title: "Longest Substring Without Repeating Characters",
      description: `<div class="prose max-w-none">
      <p class="text-gray-700">
        Given a string <code class="bg-gray-200 px-1 rounded">s</code>, find the length of the longest substring 
        without repeating characters.
      </p>
  
      <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
      <div class="bg-gray-100 p-4 rounded">
        <p><strong>Input:</strong> s = "abcabcbb"</p>
        <p><strong>Output:</strong> 3</p>
        <p class="text-gray-600"><strong>Explanation:</strong> The answer is "abc", with a length of 3.</p>
      </div>
  
      <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
      <ul class="list-disc pl-6">
        <li><code>0 ≤ s.length ≤ 5 * 10<sup>4</sup></code></li>
        <li><code>s</code> consists of English letters, digits, symbols, and spaces.</li>
      </ul>
    </div>
  `,
      difficulty: Difficulty.Medium,
      acceptanceRate: 0.31,
      tags: ['String', 'Hash Table'],
      starterCode: `function lengthOfLongestSubstring(s) {
    // Your code here
}`,
      wrappedCode: `function lengthOfLongestSubstring(s) {
    let max = 0;
    let start = 0;
    const map = {};
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }
        map[char] = end;
        max = Math.max(max, end - start + 1);
    }
    
    return max;
}

// Test case
try {
    const startTime = process.hrtime();
    const s = "abcabcbb";
    const result = lengthOfLongestSubstring(s);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "\"abcabcbb\"", output: "3" }
      ]
    },
    {
      title: "Median of Two Sorted Arrays",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given two sorted arrays <code class="bg-gray-200 px-1 rounded">nums1</code> and <code class="bg-gray-200 px-1 rounded">nums2</code> of size <code>m</code> and <code>n</code> respectively, 
      return the <strong>median</strong> of the two sorted arrays.
    </p>
    <p class="text-gray-700">
      The overall run time complexity should be <code>O(log(m + n))</code>.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> nums1 = [1,3], nums2 = [2]</p>
      <p><strong>Output:</strong> 2.00000</p>
      <p class="text-gray-600"><strong>Explanation:</strong> Merged array = [1,2,3], and median is 2.</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>nums1.length == m</code></li>
      <li><code>nums2.length == n</code></li>
      <li><code>0 ≤ m, n ≤ 1000</code></li>
      <li><code>1 ≤ m + n ≤ 2000</code></li>
      <li><code>-10<sup>6</sup> ≤ nums1[i], nums2[i] ≤ 10<sup>6</sup></code></li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Hard,
      acceptanceRate: 0.29,
      tags: ['Array', 'Binary Search'],
      starterCode: `function findMedianSortedArrays(nums1, nums2) {
    // Your code here
}`,
      wrappedCode: `function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

// Test case
try {
    const startTime = process.hrtime();
    const nums1 = [1,3];
    const nums2 = [2];
    const result = findMedianSortedArrays(nums1, nums2);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "[1,3]\n[2]", output: "2.0" }
      ]
    },
    {
      title: "Reverse Integer",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given a signed 32-bit integer <code class="bg-gray-200 px-1 rounded">x</code>, return <strong>its reverse</strong>.
      If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, return <code>0</code>.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> x = 123</p>
      <p><strong>Output:</strong> 321</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>-2<sup>31</sup> ≤ x ≤ 2<sup>31</sup> - 1</code></li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.25,
      tags: ['Math'],
      starterCode: `function reverse(x) {
    // Your code here
}`,
      wrappedCode: `function reverse(x) {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (isNegative) reversed = -reversed;
    
    // Handle 32-bit integer overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversed;
}

// Test case
try {
    const startTime = process.hrtime();
    const x = 123;
    const result = reverse(x);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "123", output: "321" }
      ]
    },
    {
      title: "Palindrome Number",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given an integer <code class="bg-gray-200 px-1 rounded">x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.
    </p>
    <p class="text-gray-700">
      An integer is a palindrome when it reads the same backward as forward.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> x = 121</p>
      <p><strong>Output:</strong> true</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>-2<sup>31</sup> ≤ x ≤ 2<sup>31</sup> - 1</code></li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.48,
      tags: ['Math'],
      starterCode: `function isPalindrome(x) {
    // Your code here
}`,
      wrappedCode: `function isPalindrome(x) {
    if (x < 0) return false;
    const original = x;
    let reversed = 0;
    
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
}

// Test case
try {
    const startTime = process.hrtime();
    const x = 121;
    const result = isPalindrome(x);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "121", output: "true" }
      ]
    },
    {
      title: "Valid Parentheses",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given a string <code class="bg-gray-200 px-1 rounded">s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.
    </p>
    <p class="text-gray-700">
      An input string is valid if:
      <ol class="list-decimal pl-6">
        <li>Open brackets must be closed by the same type of brackets.</li>
        <li>Open brackets must be closed in the correct order.</li>
      </ol>
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> s = "()"</p>
      <p><strong>Output:</strong> true</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>1 ≤ s.length ≤ 10<sup>4</sup></code></li>
      <li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.40,
      tags: ['String', 'Stack'],
      starterCode: `function isValid(s) {
    // Your code here
}`,
      wrappedCode: `function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) return false;
        }
    }
    
    return stack.length === 0;
}

// Test case
try {
    const startTime = process.hrtime();
    const s = "()";
    const result = isValid(s);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "\"()\"", output: "true" }
      ]
    },
    {
      title: "Merge Two Sorted Lists",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Merge two sorted linked lists and return it as a <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> l1 = [1,2,4], l2 = [1,3,4]</p>
      <p><strong>Output:</strong> [1,1,2,3,4,4]</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
      <li><code>-100 ≤ Node.val ≤ 100</code></li>
      <li>Both <code>l1</code> and <code>l2</code> are sorted in <strong>non-decreasing</strong> order.</li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.55,
      tags: ['Linked List', 'Recursion'],
      starterCode: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function mergeTwoLists(l1, l2) {
    // Your code here
}`,
      wrappedCode: `function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// Helper function to create ListNode from array
function createList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Test case
try {
    const startTime = process.hrtime();
    const l1 = createList([1,2,4]);
    const l2 = createList([1,3,4]);
    const result = mergeTwoLists(l1, l2);
    
    // Convert result back to array
    const output = [];
    let node = result;
    while (node) {
        output.push(node.val);
        node = node.next;
    }
    
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: output,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "[1,2,4]\n[1,3,4]", output: "[1,1,2,3,4,4]" }
      ]
    },
    {
      title: "Maximum Subarray",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      Given an integer array <code class="bg-gray-200 px-1 rounded">nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]</p>
      <p><strong>Output:</strong> 6</p>
      <p class="text-gray-600"><strong>Explanation:</strong> [4,-1,2,1] has the largest sum = 6.</p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>1 ≤ nums.length ≤ 3 * 10<sup>4</sup></code></li>
      <li><code>-10<sup>5</sup> ≤ nums[i] ≤ 10<sup>5</sup></code></li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.48,
      tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
      starterCode: `function maxSubArray(nums) {
    // Your code here
}`,
      wrappedCode: `function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    
    return maxGlobal;
}

// Test case
try {
    const startTime = process.hrtime();
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    const result = maxSubArray(nums);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
      ]
    },
    {
      title: "Climbing Stairs",
      description: `
  <div class="prose max-w-none">
    <p class="text-gray-700">
      You are climbing a staircase. It takes <code class="bg-gray-200 px-1 rounded">n</code> steps to reach the top.
    </p>
    <p class="text-gray-700">
      Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?
    </p>

    <h3 class="text-xl font-semibold mt-4">Example 1:</h3>
    <div class="bg-gray-100 p-4 rounded">
      <p><strong>Input:</strong> n = 2</p>
      <p><strong>Output:</strong> 2</p>
      <p class="text-gray-600"><strong>Explanation:</strong> There are two ways to climb to the top.
        <ol class="list-decimal pl-6">
          <li>1 step + 1 step</li>
          <li>2 steps</li>
        </ol>
      </p>
    </div>

    <h3 class="text-xl font-semibold mt-4">Constraints:</h3>
    <ul class="list-disc pl-6">
      <li><code>1 ≤ n ≤ 45</code></li>
    </ul>
  </div>
`,
      difficulty: Difficulty.Easy,
      acceptanceRate: 0.50,
      tags: ['Math', 'Dynamic Programming', 'Memoization'],
      starterCode: `function climbStairs(n) {
    // Your code here
}`,
      wrappedCode: `function climbStairs(n) {
    if (n === 1) return 1;
    let dp = [1, 2];
    
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n - 1];
}

// Test case
try {
    const startTime = process.hrtime();
    const n = 2;
    const result = climbStairs(n);
    const diff = process.hrtime(startTime);
    console.log(JSON.stringify({
        output: result,
        executionTime: diff[0] * 1000 + diff[1] / 1e6,
    }));
} catch (error) {
    console.error(error.message);
}`,
      testCases: [
        { input: "2", output: "2" }
      ]
    }
  ]

  // Create problems with their relationships
  for (const problemData of problemsData) {
    // Create the problem
    const problem = await db.problem.create({
      data: {
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty,
        acceptanceRate: problemData.acceptanceRate,
        createdAt: new Date(),
        updatedAt: new Date(),
        isSolved: false,
        starterCode: problemData.starterCode,
        wrappedCode: problemData.wrappedCode,
        // Create test cases
        testCases: {
          create: problemData.testCases
        }
      }
    })

    // Connect tags to problem
    for (const tagName of problemData.tags) {
      const tag = tags.find(t => t.name === tagName)
      if (tag) {
        await db.problemTag.create({
          data: {
            problemId: problem.id,
            tagId: tag.id
          }
        })
      }
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })