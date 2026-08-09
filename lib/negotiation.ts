/**
 * User agents that get the raw markdown instead of the HTML shell. Kept
 * character for character from the Sinatra implementation.
 */
const BOT_USER_AGENT =
  /bot|crawl|spider|scrape|curl|wget|python|java|ruby|go|rust|php|node|axios|fetch|postman/i;

export function isBotUserAgent(userAgent: string | null | undefined): boolean {
  return BOT_USER_AGENT.test(userAgent ?? '');
}

/** True when the request should be answered with `text/markdown`. */
export function wantsMarkdown({
  pathname,
  userAgent,
}: {
  pathname: string;
  userAgent?: string | null;
}): boolean {
  return pathname.endsWith('.md') || isBotUserAgent(userAgent);
}
