import React, { useState, memo, useMemo, useCallback } from 'react';

const Child = memo((props) => {
  // console.log(props);
  return (
    <div>
      <input type="text" onChange={props.onChange} />
    </div>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <div>count: {count}</div>
      <div>text: {text}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <Child onChange={handleOnChange} />
    </div>
  );
};

export default Parent;
