import { heroes } from '@/pods/heroes/data/Heroes';

export const getHeroesByPublisher = publisher => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" not found`);
  }

  return heroes.filter(hero => hero.publisher === publisher);
};
