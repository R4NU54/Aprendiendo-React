import { useState } from 'react';
import { useCounter } from '../hooks';
import { useMemo } from 'react';

const heavyProcess = iterations => {
  for (let i = 0; i < iterations; i++) {
    console.log('Ahí vamos...');
  }

  return `${iterations} iteraciones realizadas.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(false);

  const memorizeValue = useMemo(() => heavyProcess(counter), [counter]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{memorizeValue}</h4>

      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-outline-primary ml-3" onClick={handleShow}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
