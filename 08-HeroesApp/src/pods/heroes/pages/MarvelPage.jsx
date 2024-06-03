import { HeroList } from '@/pods/heroes/components';

export const MarvelPage = () => {
  return (
    <section>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </section>
  );
};
