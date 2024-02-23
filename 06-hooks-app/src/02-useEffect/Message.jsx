import { useState, useEffect } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMuseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMuseMove);
    return () => {
      window.removeEventListener('mousemove', onMuseMove);
      console.log('Componente desmontado');
    };
  }, []);
  return (
    <>
      <h2>Usuario ya existe</h2>
      <pre>{JSON.stringify(coords)}</pre>
    </>
  );
};
