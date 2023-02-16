export default interface IGuildStats {
  id: string;
  totals: {
    totalMsg: number;
    totalVoice: number;
    totalGames: number;
  };
  tops: {
    topMessagers: {
      topMessagers: Array<{
        userId: string;
        messageCount: number;
      }>;
    };
    topSpeakers: {
      topSpeakers: Array<{
        userId: string;
        totalVoiceTime: number;
      }>;
    };
    topPlayers: {
      topPlayers: Array<{
        userId: string;
        totalGameTime: number;
      }>;
    };
    topChannels: {
      topChannels: Array<{
        channelId: string;
        messageCount: number;
      }>;
    };
  };
}
