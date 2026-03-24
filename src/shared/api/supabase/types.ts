export type GameRow = {
  id: number;
  game_id: string;
  game_date: string; // 'YYYY-MM-DD'
  home_team_id: number;
  away_team_id: number;
  home_score: number | null;
  away_score: number | null;
  result_home: 'win' | 'lose' | 'draw' | null;
  status: 'completed' | 'canceled' | 'scheduled';
  cancel_reason: string | null;
  game_type: 'regular' | 'postseason';
  double_header: 0 | 1 | 2;
  stadium: string | null;
  season: number;
};

export type TeamRow = {
  id: number;
  name: string;
  short_name: string;
  game_id_code: string; // 'HH', 'LT', 'SK' 등
};
