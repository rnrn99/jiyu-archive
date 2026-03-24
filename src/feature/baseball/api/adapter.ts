import { cache } from 'react';

import { Game, GameEntity, GameResult, TeamCode } from '@/entity/baseball';
import { supabase } from '@/shared/api/supabase';
import { BaseballConfig } from '@/shared/config';

type TeamInfo = {
  game_id_code: string;
};

type GameResultItem = {
  id: number;
  game_id: string;
  game_date: string;
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
  home_team: TeamInfo;
  away_team: TeamInfo;
};

class BaseballAdapter {
  private static readonly GAMES_SELECT = `
    *,
    home_team:teams!home_team_id(game_id_code),
    away_team:teams!away_team_id(game_id_code)
  `;

  private static getMyTeamId = cache(async (): Promise<number> => {
    const { data, error } = await supabase
      .from('teams')
      .select('id')
      .eq('game_id_code', BaseballConfig.teamCode)
      .single();

    console.log(data);

    if (error || !data) {
      throw new Error(`Team not found for code: ${BaseballConfig.teamCode}`);
    }

    return data.id;
  });

  private static toGame(row: GameResultItem, teamId: number): Game {
    const isHome = row.home_team_id === teamId;
    const opponentCode = (
      isHome ? row.away_team.game_id_code : row.home_team.game_id_code
    ) as TeamCode;
    const opponent = GameEntity.KBO_TEAMS[opponentCode]?.shortName ?? opponentCode;

    const myScore = isHome ? row.home_score : row.away_score;
    const opponentScore = isHome ? row.away_score : row.home_score;

    let result: GameResult | null = null;
    if (row.status === 'completed' && myScore !== null && opponentScore !== null) {
      result = GameEntity.getResult(myScore, opponentScore);
    }

    return {
      id: row.game_id,
      date: row.game_date,
      result,
      status: row.status,
      homeScore: row.home_score,
      awayScore: row.away_score,
      isHome,
      opponent,
      doubleHeader: row.double_header,
      stadium: row.stadium,
      gameType: row.game_type,
    };
  }

  // 가장 최신의 시즌 정보를 가져옵니다.
  static getLatestSeason = cache(async (): Promise<number> => {
    const { data, error } = await supabase
      .from('games')
      .select('season')
      .order('season', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      throw new Error('Failed to fetch latest season');
    }

    return data.season;
  });

  // 내 팀의 특정 시즌 경기 목록을 가져옵니다.
  static getGames = cache(async (season: number): Promise<Game[]> => {
    const teamId = await BaseballAdapter.getMyTeamId();

    const { data, error } = await supabase
      .from('games')
      .select(BaseballAdapter.GAMES_SELECT)
      .or(`home_team_id.eq.${teamId},away_team_id.eq.${teamId}`)
      .eq('season', season)
      .order('game_date', { ascending: true });

    if (error) throw new Error(`Failed to fetch games: ${error.message}`);
    if (!data) return [];

    return (data as GameResultItem[]).map((row) => BaseballAdapter.toGame(row, teamId));
  });

  // 내 팀의 날짜 범위 경기 목록을 가져옵니다. (YYYY-MM-DD)
  static getGamesByDateRange = cache(async (from: string, to: string): Promise<Game[]> => {
    const teamId = await BaseballAdapter.getMyTeamId();

    const { data, error } = await supabase
      .from('games')
      .select(BaseballAdapter.GAMES_SELECT)
      .or(`home_team_id.eq.${teamId},away_team_id.eq.${teamId}`)
      .gte('game_date', from)
      .lte('game_date', to)
      .order('game_date', { ascending: true });

    if (error) throw new Error(`Failed to fetch games: ${error.message}`);
    if (!data) return [];

    return (data as GameResultItem[]).map((row) => BaseballAdapter.toGame(row, teamId));
  });
}

export default BaseballAdapter;
