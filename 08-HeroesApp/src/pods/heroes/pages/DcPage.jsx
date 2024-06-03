import { HeroList } from '@/pods/heroes/components';

export const DcPage = () => {
  return (
    <section>
      <h1>DC comics</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </section>
  );
};
