import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokemon</h1>
      {counter}

      <hr />
      {isLoading ? <LoadingMessage /> : <PokemonCard {...data} />}

      <button className="btn btn-primary m-1" onClick={() => (counter > 1 ? decrement() : null)}>
        Anterior
      </button>
      <button className="btn btn-primary m-1" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
