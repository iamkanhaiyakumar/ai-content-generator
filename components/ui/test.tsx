import React from 'react';

type Item = [string, number, string[]]; // Define the type

const arr: Item = ["Product Title", 29.99, ["Feature 1", "Feature 2"]];

const ArrayRenderComponent: React.FC = () => {
  return (
    <div>
      {/* Display Title */}
      <h1>{arr[0]}</h1>

      {/* Display Price */}
      <p>Price: ${arr[1]}</p>

      {/* Display Features */}
      <ul>
        {arr[2].map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayRenderComponent;
