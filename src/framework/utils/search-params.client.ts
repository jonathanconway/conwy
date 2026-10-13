export function setSearchParams(params: Record<string, string>) {
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  window.history.pushState(null, "", url.toString());
}

export function clearSearchParams(params: readonly string[]) {
  const url = new URL(window.location.href);

  for (const key of params) {
    url.searchParams.delete(key);
  }

  window.history.pushState(null, "", url.toString());
}
