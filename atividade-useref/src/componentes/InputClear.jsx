import React, { useRef } from 'react';

const Entrada = () => {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Entrada;
