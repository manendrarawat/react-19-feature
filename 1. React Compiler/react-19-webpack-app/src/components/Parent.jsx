import React from 'react';
import Child from './Child';

export default function Parent({ incrementCount1, count1 }) {
    console.count('Parent render :>> ');
  return (
    <div>
      <h2>Parent</h2>
        <button onClick={incrementCount1}>Counter 1: {count1}</button>
      <Child />
    </div>
  )
}
