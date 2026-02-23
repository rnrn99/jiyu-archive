import { BaseballAdapter } from '@/feature/baseball';
import { GameRecord, styles } from '@/views/baseball';

export const revalidate = 3600;

export default async function BaseballPage() {
  const season = await BaseballAdapter.getLatestSeason();
  const games = await BaseballAdapter.getGames(season);

  return (
    <article className={styles.article}>
      <GameRecord games={games} season={season} />
    </article>
  );
}
