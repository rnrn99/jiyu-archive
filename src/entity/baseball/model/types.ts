export type GameResult = 'big-win' | 'win' | 'draw' | 'lose' | 'big-lose';

export type Game = {
  id: string; // game_id
  date: string; // 'YYYY-MM-DD'
  result: GameResult | null; // null = canceled/scheduled
  status: 'completed' | 'canceled' | 'scheduled';
  homeScore: number | null;
  awayScore: number | null;
  isHome: boolean;
  opponent: string; // 상대팀 short_name
  doubleHeader: 0 | 1 | 2;
  stadium: string | null;
  gameType: 'regular' | 'postseason';
};

export type SeasonStats = {
  wins: number;
  losses: number;
  draws: number;
  total: number;
};

export type TeamCode = 'HT' | 'SS' | 'LG' | 'OB' | 'KT' | 'SK' | 'LT' | 'HH' | 'NC' | 'WO';
