import { PropTypes } from 'prop-types';
import { getHeroesByPublisher } from '@/pods/heroes/helpers';
import { HeroCard } from '@/pods/heroes/components';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ul className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </ul>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
