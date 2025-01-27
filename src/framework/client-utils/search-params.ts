export function setSearchParams(params: Record<string, string>) {
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  window.history.pushState(null, "", url.toString());
}
