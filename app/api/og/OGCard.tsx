import type { StreakStats } from '@/types';

interface OGCardProps {
  user: string;
  stats: StreakStats;
}

export function OGCard({ user, stats }: OGCardProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '40px',
      }}
    >
      {/* CommitPulse Logo */}
      <div
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#58a6ff',
          marginBottom: '20px',
          letterSpacing: '2px',
        }}
      >
        COMMITPULSE
      </div>

      {/* Username */}
      <div
        style={{
          fontSize: '56px',
          fontWeight: 'bold',
          color: '#c9d1d9',
          marginBottom: '40px',
        }}
      >
        @{user}
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: 'flex',
          gap: '60px',
          fontSize: '24px',
          color: '#8b949e',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '48px', color: '#58a6ff', fontWeight: 'bold' }}>
            {stats.currentStreak}
          </div>
          <div style={{ marginTop: '8px', fontSize: '16px' }}>Current Streak</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '48px', color: '#58a6ff', fontWeight: 'bold' }}>
            {stats.longestStreak}
          </div>
          <div style={{ marginTop: '8px', fontSize: '16px' }}>Longest Streak</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '48px', color: '#58a6ff', fontWeight: 'bold' }}>
            {stats.totalContributions}
          </div>
          <div style={{ marginTop: '8px', fontSize: '16px' }}>Total Contributions</div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '60px',
          fontSize: '14px',
          color: '#6e7681',
          borderTop: '1px solid #30363d',
          paddingTop: '20px',
        }}
      >
        github.com/JhaSourav07/commitpulse
      </div>
    </div>
  );
}
