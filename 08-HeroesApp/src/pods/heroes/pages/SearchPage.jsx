import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '@/pods/heroes/helpers';
import { useForm } from '@/hooks/useForm';
import { HeroCard } from '@/pods/heroes/components';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = event => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <h1>Busqueda</h1>
        <hr />
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form className="d-flex gap-2" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Busca tu heroe..."
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Busca tu heroe
          </div>
          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hay heroe con: <b>{q}</b>
          </div>
          {heroes.map(hero => (
            <section className="p-2" key={hero.id}>
              <HeroCard key={hero.id} {...hero} />
            </section>
          ))}
        </div>
      </div>
    </>
  );
};
