import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './small';

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

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
