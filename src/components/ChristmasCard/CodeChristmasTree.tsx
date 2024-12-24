// src/components/ChristmasCard/CodeChristmasTree.tsx
import React from 'react';

const CodeChristmasTree = () => {
  const treeArt = `
     {*}
    {/*\\}
   {/***\\}
  {/*****\\}
 {/*******\\}
{/*********\\}
    [===]
  `;

  return (
    <pre className="text-green-400 font-mono text-center whitespace-pre">
      {treeArt.split('').map((char, i) => {
        let color = 'text-green-400';
        if (char === '*') color = 'text-yellow-400';
        if (char === '[' || char === ']' || char === '=') color = 'text-brown-400';
        
        return (
          <span 
            key={i} 
            className={`${color} hover:text-white transition-colors duration-300`}
          >
            {char}
          </span>
        );
      })}
    </pre>
  );
};

export default CodeChristmasTree;