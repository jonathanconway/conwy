export function getStaticCache(fs: any, path: any) {
  function getItem(key: string) {
    const cacheFilePath = path.join(__dirname, `../../static/cache/${key}`);
    return fs.readFileSync(`${cacheFilePath}`).toString();
  }

  function getItemJSON<T>(key: string) {
    return JSON.parse(getItem(`${key}.json`)) as T;
  }

  function saveItem() {}

  return {
    getItem,
    getItemJSON,
    saveItem,
  };
}
