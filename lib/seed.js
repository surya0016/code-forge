"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var db_1 = require("./db");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var tags, problemsData, _i, problemsData_1, problemData, problem, _loop_1, _a, _b, tagName;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Clear existing data (in correct order to respect foreign keys)
                return [4 /*yield*/, db_1.db.submission.deleteMany()];
                case 1:
                    // Clear existing data (in correct order to respect foreign keys)
                    _c.sent();
                    return [4 /*yield*/, db_1.db.solution.deleteMany()];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, db_1.db.discussion.deleteMany()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, db_1.db.problemTag.deleteMany()];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, db_1.db.testCase.deleteMany()];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, db_1.db.problem.deleteMany()];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, db_1.db.tag.deleteMany()
                        // Create tags
                    ];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, Promise.all([
                            db_1.db.tag.create({
                                data: {
                                    name: 'Array',
                                    description: 'Problems involving array manipulation'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Hash Table',
                                    description: 'Problems using hash maps/dictionaries'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Linked List',
                                    description: 'Problems involving linked list data structure'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Math',
                                    description: 'Mathematical problems'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'String',
                                    description: 'String manipulation problems'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Two Pointers',
                                    description: 'Problems using two pointer technique'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Binary Search',
                                    description: 'Problems using binary search'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Dynamic Programming',
                                    description: 'Problems using dynamic programming'
                                }
                            }),
                            db_1.db.tag.create({
                                data: {
                                    name: 'Tree',
                                    description: 'Problems involving tree data structures'
                                }
                            })
                        ])
                        // Sample problems data
                    ];
                case 8:
                    tags = _c.sent();
                    problemsData = [
                        {
                            title: "Two Sum",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given an array of integers <code class=\"bg-gray-200 px-1 rounded\">nums</code> and an integer <code class=\"bg-gray-200 px-1 rounded\">target</code>, \n      return <strong>indices</strong> of the two numbers such that they add up to <code class=\"bg-gray-200 px-1 rounded\">target</code>.\n    </p>\n    <p class=\"text-gray-700\">\n      You may assume that each input would have exactly <strong>one solution</strong>, \n      and you may not use the same element twice.\n    </p>\n    <p class=\"text-gray-700\">\n      You can return the answer in <strong>any order</strong>.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> nums = [2,7,11,15], target = 9</p>\n      <p><strong>Output:</strong> [0,1]</p>\n      <p class=\"text-gray-600\"><strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0,1].</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li>2 \u2264 nums.length \u2264 10<sup>4</sup></li>\n      <li>-10<sup>9</sup> \u2264 nums[i] \u2264 10<sup>9</sup></li>\n      <li>-10<sup>9</sup> \u2264 target \u2264 10<sup>9</sup></li>\n      <li>Only one valid answer exists.</li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.45,
                            tags: ['Array', 'Hash Table'],
                            starterCode: "function twoSum(nums, target) {\n    // Your code here\n}",
                            wrappedCode: "function twoSum(nums, target) {\n    const map = {};\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.hasOwnProperty(complement)) {\n            return [map[complement], i];\n        }\n        map[nums[i]] = i;\n    }\n    return [];\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const nums = [2,7,11,15];\n    const target = 9;\n    const result = twoSum(nums, target);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "[2,7,11,15]\n9", output: "[0,1]" }
                            ]
                        },
                        {
                            title: "Add Two Numbers",
                            description: "<div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      You are given two non-empty linked lists representing two non-negative integers. \n      The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. \n      Add the two numbers and return the sum as a <strong>linked list</strong>.\n    </p>\n    <p class=\"text-gray-700\">\n      You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]</p>\n      <p><strong>Output:</strong> [7,0,8]</p>\n      <p class=\"text-gray-600\"><strong>Explanation:</strong> 342 + 465 = 807.</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li>\n      <li>0 \u2264 Node.val \u2264 9</li>\n      <li>It is guaranteed that the list represents a number that does not have leading zeros.</li>\n    </ul>\n  </div>",
                            difficulty: client_1.Difficulty.Medium,
                            acceptanceRate: 0.34,
                            tags: ['Linked List', 'Math'],
                            starterCode: "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val);\n    this.next = (next===undefined ? null : next);\n}\n\nfunction addTwoNumbers(l1, l2) {\n    // Your code here\n}",
                            wrappedCode: "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val);\n    this.next = (next===undefined ? null : next);\n}\n\nfunction addTwoNumbers(l1, l2) {\n    let dummy = new ListNode(0);\n    let current = dummy;\n    let carry = 0;\n    \n    while (l1 || l2 || carry) {\n        const val1 = l1 ? l1.val : 0;\n        const val2 = l2 ? l2.val : 0;\n        const sum = val1 + val2 + carry;\n        carry = Math.floor(sum / 10);\n        current.next = new ListNode(sum % 10);\n        current = current.next;\n        l1 = l1 ? l1.next : null;\n        l2 = l2 ? l2.next : null;\n    }\n    \n    return dummy.next;\n}\n\n// Helper function to create ListNode from array\nfunction createList(arr) {\n    if (!arr.length) return null;\n    const head = new ListNode(arr[0]);\n    let current = head;\n    for (let i = 1; i < arr.length; i++) {\n        current.next = new ListNode(arr[i]);\n        current = current.next;\n    }\n    return head;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const l1 = createList([2,4,3]);\n    const l2 = createList([5,6,4]);\n    const result = addTwoNumbers(l1, l2);\n    \n    // Convert result back to array\n    const output = [];\n    let node = result;\n    while (node) {\n        output.push(node.val);\n        node = node.next;\n    }\n    \n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: output,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "[2,4,3]\n[5,6,4]", output: "[7,0,8]" }
                            ]
                        },
                        {
                            title: "Longest Substring Without Repeating Characters",
                            description: "<div class=\"prose max-w-none\">\n      <p class=\"text-gray-700\">\n        Given a string <code class=\"bg-gray-200 px-1 rounded\">s</code>, find the length of the longest substring \n        without repeating characters.\n      </p>\n  \n      <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n      <div class=\"bg-gray-100 p-4 rounded\">\n        <p><strong>Input:</strong> s = \"abcabcbb\"</p>\n        <p><strong>Output:</strong> 3</p>\n        <p class=\"text-gray-600\"><strong>Explanation:</strong> The answer is \"abc\", with a length of 3.</p>\n      </div>\n  \n      <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n      <ul class=\"list-disc pl-6\">\n        <li><code>0 \u2264 s.length \u2264 5 * 10<sup>4</sup></code></li>\n        <li><code>s</code> consists of English letters, digits, symbols, and spaces.</li>\n      </ul>\n    </div>\n  ",
                            difficulty: client_1.Difficulty.Medium,
                            acceptanceRate: 0.31,
                            tags: ['String', 'Hash Table'],
                            starterCode: "function lengthOfLongestSubstring(s) {\n    // Your code here\n}",
                            wrappedCode: "function lengthOfLongestSubstring(s) {\n    let max = 0;\n    let start = 0;\n    const map = {};\n    \n    for (let end = 0; end < s.length; end++) {\n        const char = s[end];\n        if (map[char] !== undefined && map[char] >= start) {\n            start = map[char] + 1;\n        }\n        map[char] = end;\n        max = Math.max(max, end - start + 1);\n    }\n    \n    return max;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const s = \"abcabcbb\";\n    const result = lengthOfLongestSubstring(s);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "\"abcabcbb\"", output: "3" }
                            ]
                        },
                        {
                            title: "Median of Two Sorted Arrays",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given two sorted arrays <code class=\"bg-gray-200 px-1 rounded\">nums1</code> and <code class=\"bg-gray-200 px-1 rounded\">nums2</code> of size <code>m</code> and <code>n</code> respectively, \n      return the <strong>median</strong> of the two sorted arrays.\n    </p>\n    <p class=\"text-gray-700\">\n      The overall run time complexity should be <code>O(log(m + n))</code>.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> nums1 = [1,3], nums2 = [2]</p>\n      <p><strong>Output:</strong> 2.00000</p>\n      <p class=\"text-gray-600\"><strong>Explanation:</strong> Merged array = [1,2,3], and median is 2.</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>nums1.length == m</code></li>\n      <li><code>nums2.length == n</code></li>\n      <li><code>0 \u2264 m, n \u2264 1000</code></li>\n      <li><code>1 \u2264 m + n \u2264 2000</code></li>\n      <li><code>-10<sup>6</sup> \u2264 nums1[i], nums2[i] \u2264 10<sup>6</sup></code></li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Hard,
                            acceptanceRate: 0.29,
                            tags: ['Array', 'Binary Search'],
                            starterCode: "function findMedianSortedArrays(nums1, nums2) {\n    // Your code here\n}",
                            wrappedCode: "function findMedianSortedArrays(nums1, nums2) {\n    const merged = [...nums1, ...nums2].sort((a, b) => a - b);\n    const mid = Math.floor(merged.length / 2);\n    \n    if (merged.length % 2 === 0) {\n        return (merged[mid - 1] + merged[mid]) / 2;\n    } else {\n        return merged[mid];\n    }\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const nums1 = [1,3];\n    const nums2 = [2];\n    const result = findMedianSortedArrays(nums1, nums2);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "[1,3]\n[2]", output: "2.0" }
                            ]
                        },
                        {
                            title: "Reverse Integer",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given a signed 32-bit integer <code class=\"bg-gray-200 px-1 rounded\">x</code>, return <strong>its reverse</strong>.\n      If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, return <code>0</code>.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> x = 123</p>\n      <p><strong>Output:</strong> 321</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>-2<sup>31</sup> \u2264 x \u2264 2<sup>31</sup> - 1</code></li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.25,
                            tags: ['Math'],
                            starterCode: "function reverse(x) {\n    // Your code here\n}",
                            wrappedCode: "function reverse(x) {\n    const isNegative = x < 0;\n    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));\n    if (isNegative) reversed = -reversed;\n    \n    // Handle 32-bit integer overflow\n    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {\n        return 0;\n    }\n    return reversed;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const x = 123;\n    const result = reverse(x);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "123", output: "321" }
                            ]
                        },
                        {
                            title: "Palindrome Number",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given an integer <code class=\"bg-gray-200 px-1 rounded\">x</code>, return <code>true</code> if <code>x</code> is a palindrome, and <code>false</code> otherwise.\n    </p>\n    <p class=\"text-gray-700\">\n      An integer is a palindrome when it reads the same backward as forward.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> x = 121</p>\n      <p><strong>Output:</strong> true</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>-2<sup>31</sup> \u2264 x \u2264 2<sup>31</sup> - 1</code></li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.48,
                            tags: ['Math'],
                            starterCode: "function isPalindrome(x) {\n    // Your code here\n}",
                            wrappedCode: "function isPalindrome(x) {\n    if (x < 0) return false;\n    const original = x;\n    let reversed = 0;\n    \n    while (x > 0) {\n        reversed = reversed * 10 + x % 10;\n        x = Math.floor(x / 10);\n    }\n    \n    return original === reversed;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const x = 121;\n    const result = isPalindrome(x);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "121", output: "true" }
                            ]
                        },
                        {
                            title: "Valid Parentheses",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given a string <code class=\"bg-gray-200 px-1 rounded\">s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.\n    </p>\n    <p class=\"text-gray-700\">\n      An input string is valid if:\n      <ol class=\"list-decimal pl-6\">\n        <li>Open brackets must be closed by the same type of brackets.</li>\n        <li>Open brackets must be closed in the correct order.</li>\n      </ol>\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> s = \"()\"</p>\n      <p><strong>Output:</strong> true</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>1 \u2264 s.length \u2264 10<sup>4</sup></code></li>\n      <li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.40,
                            tags: ['String', 'Stack'],
                            starterCode: "function isValid(s) {\n    // Your code here\n}",
                            wrappedCode: "function isValid(s) {\n    const stack = [];\n    const map = {\n        '(': ')',\n        '{': '}',\n        '[': ']'\n    };\n    \n    for (let char of s) {\n        if (map[char]) {\n            stack.push(map[char]);\n        } else {\n            if (stack.pop() !== char) return false;\n        }\n    }\n    \n    return stack.length === 0;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const s = \"()\";\n    const result = isValid(s);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "\"()\"", output: "true" }
                            ]
                        },
                        {
                            title: "Merge Two Sorted Lists",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Merge two sorted linked lists and return it as a <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> l1 = [1,2,4], l2 = [1,3,4]</p>\n      <p><strong>Output:</strong> [1,1,2,3,4,4]</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>\n      <li><code>-100 \u2264 Node.val \u2264 100</code></li>\n      <li>Both <code>l1</code> and <code>l2</code> are sorted in <strong>non-decreasing</strong> order.</li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.55,
                            tags: ['Linked List', 'Recursion'],
                            starterCode: "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val);\n    this.next = (next===undefined ? null : next);\n}\n\nfunction mergeTwoLists(l1, l2) {\n    // Your code here\n}",
                            wrappedCode: "function ListNode(val, next) {\n    this.val = (val===undefined ? 0 : val);\n    this.next = (next===undefined ? null : next);\n}\n\nfunction mergeTwoLists(l1, l2) {\n    const dummy = new ListNode(0);\n    let current = dummy;\n    \n    while (l1 && l2) {\n        if (l1.val < l2.val) {\n            current.next = l1;\n            l1 = l1.next;\n        } else {\n            current.next = l2;\n            l2 = l2.next;\n        }\n        current = current.next;\n    }\n    \n    current.next = l1 || l2;\n    return dummy.next;\n}\n\n// Helper function to create ListNode from array\nfunction createList(arr) {\n    if (!arr.length) return null;\n    const head = new ListNode(arr[0]);\n    let current = head;\n    for (let i = 1; i < arr.length; i++) {\n        current.next = new ListNode(arr[i]);\n        current = current.next;\n    }\n    return head;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const l1 = createList([1,2,4]);\n    const l2 = createList([1,3,4]);\n    const result = mergeTwoLists(l1, l2);\n    \n    // Convert result back to array\n    const output = [];\n    let node = result;\n    while (node) {\n        output.push(node.val);\n        node = node.next;\n    }\n    \n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: output,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "[1,2,4]\n[1,3,4]", output: "[1,1,2,3,4,4]" }
                            ]
                        },
                        {
                            title: "Maximum Subarray",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      Given an integer array <code class=\"bg-gray-200 px-1 rounded\">nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]</p>\n      <p><strong>Output:</strong> 6</p>\n      <p class=\"text-gray-600\"><strong>Explanation:</strong> [4,-1,2,1] has the largest sum = 6.</p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>1 \u2264 nums.length \u2264 3 * 10<sup>4</sup></code></li>\n      <li><code>-10<sup>5</sup> \u2264 nums[i] \u2264 10<sup>5</sup></code></li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.48,
                            tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
                            starterCode: "function maxSubArray(nums) {\n    // Your code here\n}",
                            wrappedCode: "function maxSubArray(nums) {\n    let maxCurrent = nums[0];\n    let maxGlobal = nums[0];\n    \n    for (let i = 1; i < nums.length; i++) {\n        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);\n        if (maxCurrent > maxGlobal) {\n            maxGlobal = maxCurrent;\n        }\n    }\n    \n    return maxGlobal;\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const nums = [-2,1,-3,4,-1,2,1,-5,4];\n    const result = maxSubArray(nums);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
                            ]
                        },
                        {
                            title: "Climbing Stairs",
                            description: "\n  <div class=\"prose max-w-none\">\n    <p class=\"text-gray-700\">\n      You are climbing a staircase. It takes <code class=\"bg-gray-200 px-1 rounded\">n</code> steps to reach the top.\n    </p>\n    <p class=\"text-gray-700\">\n      Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?\n    </p>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Example 1:</h3>\n    <div class=\"bg-gray-100 p-4 rounded\">\n      <p><strong>Input:</strong> n = 2</p>\n      <p><strong>Output:</strong> 2</p>\n      <p class=\"text-gray-600\"><strong>Explanation:</strong> There are two ways to climb to the top.\n        <ol class=\"list-decimal pl-6\">\n          <li>1 step + 1 step</li>\n          <li>2 steps</li>\n        </ol>\n      </p>\n    </div>\n\n    <h3 class=\"text-xl font-semibold mt-4\">Constraints:</h3>\n    <ul class=\"list-disc pl-6\">\n      <li><code>1 \u2264 n \u2264 45</code></li>\n    </ul>\n  </div>\n",
                            difficulty: client_1.Difficulty.Easy,
                            acceptanceRate: 0.50,
                            tags: ['Math', 'Dynamic Programming', 'Memoization'],
                            starterCode: "function climbStairs(n) {\n    // Your code here\n}",
                            wrappedCode: "function climbStairs(n) {\n    if (n === 1) return 1;\n    let dp = [1, 2];\n    \n    for (let i = 2; i < n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n    \n    return dp[n - 1];\n}\n\n// Test case\ntry {\n    const startTime = process.hrtime();\n    const n = 2;\n    const result = climbStairs(n);\n    const diff = process.hrtime(startTime);\n    console.log(JSON.stringify({\n        output: result,\n        executionTime: diff[0] * 1000 + diff[1] / 1e6,\n    }));\n} catch (error) {\n    console.error(error.message);\n}",
                            testCases: [
                                { input: "2", output: "2" }
                            ]
                        }
                    ];
                    _i = 0, problemsData_1 = problemsData;
                    _c.label = 9;
                case 9:
                    if (!(_i < problemsData_1.length)) return [3 /*break*/, 15];
                    problemData = problemsData_1[_i];
                    return [4 /*yield*/, db_1.db.problem.create({
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
                    ];
                case 10:
                    problem = _c.sent();
                    _loop_1 = function (tagName) {
                        var tag;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    tag = tags.find(function (t) { return t.name === tagName; });
                                    if (!tag) return [3 /*break*/, 2];
                                    return [4 /*yield*/, db_1.db.problemTag.create({
                                            data: {
                                                problemId: problem.id,
                                                tagId: tag.id
                                            }
                                        })];
                                case 1:
                                    _d.sent();
                                    _d.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    _a = 0, _b = problemData.tags;
                    _c.label = 11;
                case 11:
                    if (!(_a < _b.length)) return [3 /*break*/, 14];
                    tagName = _b[_a];
                    return [5 /*yield**/, _loop_1(tagName)];
                case 12:
                    _c.sent();
                    _c.label = 13;
                case 13:
                    _a++;
                    return [3 /*break*/, 11];
                case 14:
                    _i++;
                    return [3 /*break*/, 9];
                case 15:
                    console.log('Database seeded successfully!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.db.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
