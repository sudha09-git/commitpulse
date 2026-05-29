import { ImageResponse } from '@vercel/og';
import { fetchGitHubContributions } from '@/lib/github';
import { calculateStreak } from '@/lib/calculate';
import { getSecondsUntilUTCMidnight } from '@/utils/time';
import { OGCard } from './OGCard';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user') ?? 'unknown';
  const secondsUntilMidnight = getSecondsUntilUTCMidnight();

  try {
    // Fetch contribution data
    const calendar = await fetchGitHubContributions(user, { bypassCache: false });
    const stats = calculateStreak(calendar, 'UTC');

    return new ImageResponse(<OGCard user={user} stats={stats} />, {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': `public, s-maxage=${secondsUntilMidnight}, stale-while-revalidate=86400`,
        'Content-Type': 'image/png',
      },
    });
  } catch (error) {
    console.error('[og]', error);
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: '#ff0000',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Error generating OG image for {user}
      </div>,
      { width: 1200, height: 630 }
    );
  }
}
