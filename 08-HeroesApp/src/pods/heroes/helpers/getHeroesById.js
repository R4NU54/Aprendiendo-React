import { heroes } from '@/pods/heroes/data/Heroes';

export const getHeroesById = id => heroes.find(hero => hero.id === id);
