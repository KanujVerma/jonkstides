const BASE = 'https://connect.squareup.com/v2'
const VERSION = '2024-01-17'

export async function squareFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
      'Square-Version': VERSION,
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> | undefined),
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Square API error ${res.status}: ${text}`)
  }
  return res.json() as Promise<T>
}
