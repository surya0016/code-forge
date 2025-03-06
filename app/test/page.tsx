"use client"

import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from '@/components/CodeEditor';

interface Result {
  passed?: boolean;
  output?: string;
  error?: string;
}

const Home: React.FC = () => {
  const [code, setCode] = useState<string>('function sum(a, b){}');
  const [results, setResults] = useState<Result[]>([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post<{ results: Result[] }>('/api/execute', {
        code,
        language: 'javascript',
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error executing code:', error);
      setResults([{ error: 'Failed to execute code' }]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>LeetCode Clone</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Problem: Sum of Two Numbers</h2>
        <p>
          Write a function that takes two numbers as input and returns their sum.
        </p>
        <pre>
          Example Input: 2, 3
          Example Output: 5
        </pre>
      </div>
      <CodeEditor code={code} onChange={(value) => setCode(value)} />
      <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Submit
      </button>
      <div style={{ marginTop: '20px' }}>
        <h3>Results:</h3>
        {results.map((result, index) => (
          <div key={index}>
            {result.error ? (
              <pre style={{ color: 'red' }}>Error: {result.error}</pre>
            ) : (
              <pre>
                Test Case {index + 1}: {result.passed ? 'Passed' : 'Failed'} <br/>
                Output: {result.output}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;