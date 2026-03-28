export async function waitFor(delay?: number) {
  return new Promise<void>((res) => {
    setTimeout(() => res(), delay);
  });
}
