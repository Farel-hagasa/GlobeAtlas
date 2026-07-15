export interface WikipediaSummary {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
  };
}

export async function getWikipediaSummary(country: string) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        country
      )}`
    );

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as WikipediaSummary;
  } catch {
    return null;
  }
}