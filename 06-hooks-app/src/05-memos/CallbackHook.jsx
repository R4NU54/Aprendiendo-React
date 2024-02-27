import { useState } from 'react';
import { ShowIncremet } from './Showincremet';
import { useCallback } from 'react';

export const UseCalbackHook = () => {
  const [counter, setCounter] = useState(1);

  const incrementFather = useCallback(value => {
    setCounter(c => c + value);
  }, []);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>UseCallback Hook: {counter} </h1>
      <hr />

      <ShowIncremet increment={incrementFather} />
    </>
  );
};
