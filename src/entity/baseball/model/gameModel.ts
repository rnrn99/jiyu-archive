import { GameResult, TeamCode } from './types';

class GameEntity {
  /**
   * 점수 차이 기준으로 경기 결과를 판별합니다.
   */
  private static SCORE_OFFSET = 5;
  static getResult(score: number, opponentScore: number): GameResult {
    const diff = score - opponentScore;

    if (diff === 0) return 'draw';
    if (diff >= this.SCORE_OFFSET) return 'big-win';
    if (diff > 0) return 'win';
    if (diff <= -this.SCORE_OFFSET) return 'big-lose';
    return 'lose';
  }

  static KBO_TEAMS: Readonly<
    Record<
      TeamCode,
      {
        name: string;
        shortName: string;
      }
    >
  > = {
    HT: { name: 'KIA 타이거즈', shortName: 'KIA' },
    SS: { name: '삼성 라이온즈', shortName: '삼성' },
    LG: { name: 'LG 트윈스', shortName: 'LG' },
    OB: { name: '두산 베어스', shortName: '두산' },
    KT: { name: 'KT 위즈', shortName: 'KT' },
    SK: { name: 'SSG 랜더스', shortName: 'SSG' },
    LT: { name: '롯데 자이언츠', shortName: '롯데' },
    HH: { name: '한화 이글스', shortName: '한화' },
    NC: { name: 'NC 다이노스', shortName: 'NC' },
    WO: { name: '키움 히어로즈', shortName: '키움' },
  };
}

export default GameEntity;
