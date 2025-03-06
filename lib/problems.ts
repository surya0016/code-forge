import { Problem } from './types';

export interface TestCase {
  input: string
  expectedOutput: string
  actualOutput?: string
  status?: "pass" | "fail"
  executionTime?: string
  memoryUsage?: string
}

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptanceRate: 48.2,
    tags: ["Array", "Hash Table"],
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]"
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    isSolved: true,
    testCases: [
      {
        input: "[2,7,11,15], 9",
        expectedOutput: "[0,1]",
      },
      {
        input: "[3,2,4], 6",
        expectedOutput: "[1,2]",
      },
      {
        input: "[3,3], 6",
        expectedOutput: "[0,1]",
      },
      {
        input: "[1,2,3,4,5], 9",
        expectedOutput: "[3,4]",
      },
      {
        input: "[-1,-2,-3,-4,-5], -8",
        expectedOutput: "[2,4]",
      },
    ],
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptanceRate: 39.7,
    tags: ["Linked List", "Math", "Recursion"],
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      },
      {
        input: "l1 = [0], l2 = [0]",
        output: "[0]"
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]"
      }
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    isSolved: false
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptanceRate: 33.8,
    tags: ["Hash Table", "String", "Sliding Window"],
    description: "Given a string `s`, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The answer is \"abc\", with the length of 3."
      },
      {
        input: "s = \"bbbbb\"",
        output: "1",
        explanation: "The answer is \"b\", with the length of 1."
      },
      {
        input: "s = \"pwwkew\"",
        output: "3",
        explanation: "The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring."
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    isSolved: false
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptanceRate: 35.1,
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2."
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6"
    ],
    isSolved: false
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    acceptanceRate: 32.4,
    tags: ["String", "Dynamic Programming"],
    description: "Given a string `s`, return the longest palindromic substring in `s`.",
    examples: [
      {
        input: "s = \"babad\"",
        output: "\"bab\"",
        explanation: "\"aba\" is also a valid answer."
      },
      {
        input: "s = \"cbbd\"",
        output: "\"bb\""
      }
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters."
    ],
    isSolved: false
  },
  {
    id: 6,
    title: "ZigZag Conversion",
    difficulty: "Medium",
    acceptanceRate: 42.5,
    tags: ["String"],
    description: "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this:\n\nP   A   H   N\nA P L S I I G\nY   I   R\n\nAnd then read line by line: \"PAHNAPLSIIGYIR\"\n\nWrite the code that will take a string and make this conversion given a number of rows.",
    examples: [
      {
        input: "s = \"PAYPALISHIRING\", numRows = 3",
        output: "\"PAHNAPLSIIGYIR\""
      },
      {
        input: "s = \"PAYPALISHIRING\", numRows = 4",
        output: "\"PINALSIGYAHRPI\"",
        explanation: "P     I    N\nA   L S  I G\nY A   H R\nP     I"
      },
      {
        input: "s = \"A\", numRows = 1",
        output: "\"A\""
      }
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consists of English letters (lower-case and upper-case), ',' and '.'.",
      "1 <= numRows <= 1000"
    ],
    isSolved: false
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    acceptanceRate: 27.1,
    tags: ["Math"],
    description: "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.\n\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).",
    examples: [
      {
        input: "x = 123",
        output: "321"
      },
      {
        input: "x = -123",
        output: "-321"
      },
      {
        input: "x = 120",
        output: "21"
      }
    ],
    constraints: [
      "-2^31 <= x <= 2^31 - 1"
    ],
    isSolved: false
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    acceptanceRate: 16.6,
    tags: ["String", "Math"],
    description: "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).\n\nThe algorithm for `myAtoi(string s)` is as follows:\n\n1. Read in and ignore any leading whitespace.\n2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.\n3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.\n4. Convert these digits into an integer (i.e. \"123\" -> 123, \"0032\" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).\n5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.\n6. Return the integer as the final result.",
    examples: [
      {
        input: "s = \"42\"",
        output: "42",
        explanation: "The underlined characters are what is read in, the caret is the current reader position.\nStep 1: \"42\" (no characters read because there is no leading whitespace)\n         ^\nStep 2: \"42\" (no characters read because there is neither a '-' nor '+')\n         ^\nStep 3: \"42\" (\"42\" is read in)\n           ^\nThe parsed integer is 42.\nSince 42 is in the range [-2^31, 2^31 - 1], the final result is 42."
      },
      {
        input: "s = \"   -42\"",
        output: "-42",
        explanation: "Step 1: \"   -42\" (leading whitespace is read and ignored)\n            ^\nStep 2: \"   -42\" ('-' is read, so the result should be negative)\n             ^\nStep 3: \"   -42\" (\"42\" is read in)\n               ^\nThe parsed integer is -42.\nSince -42 is in the range [-2^31, 2^31 - 1], the final result is -42."
      },
      {
        input: "s = \"4193 with words\"",
        output: "4193",
        explanation: "Step 1: \"4193 with words\" (no characters read because there is no leading whitespace)\n         ^\nStep 2: \"4193 with words\" (no characters read because there is neither a '-' nor '+')\n         ^\nStep 3: \"4193 with words\" (\"4193\" is read in; reading stops because the next character is a non-digit)\n             ^\nThe parsed integer is 4193.\nSince 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193."
      }
    ],
    constraints: [
      "0 <= s.length <= 200",
      "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'."
    ],
    isSolved: false
  }
];