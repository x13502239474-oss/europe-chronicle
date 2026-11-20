// 课程内容加载器：通过 Vite 的 import.meta.glob 按需引入 Markdown 正文。
// 内容与界面完全分离——正文只存在于 content/ 目录的 .md 文件里。
// 采用懒加载：首屏只加载框架代码，打开某一课时才请求对应正文。

// 懒加载：每项是一个返回 Promise<string> 的加载器
const mdFiles = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

const cache = new Map<string, string>();

/** 判断某节课正文是否存在 */
export function hasLessonContent(file: string): boolean {
  return mdFiles[`../content/${file}`] !== undefined;
}

/**
 * 根据课程文件的相对路径异步获取 Markdown 正文。
 * @param file catalog 中声明的 file 字段，如 'part01/01-01.md'
 */
export async function loadLessonContent(file: string): Promise<string> {
  const cached = cache.get(file);
  if (cached !== undefined) return cached;

  const loader = mdFiles[`../content/${file}`];
  if (!loader) {
    return `> 本节正文尚未编写。\n\n该课程的框架已就绪，正文内容将在后续阶段补齐。`;
  }
  const raw = await loader();
  cache.set(file, raw);
  return raw;
}

/** 预加载某一课正文（用于上一课/下一课，提升翻页速度） */
export function prefetchLessonContent(file: string): void {
  if (cache.has(file)) return;
  const loader = mdFiles[`../content/${file}`];
  if (!loader) return;
  loader()
    .then((raw) => cache.set(file, raw))
    .catch(() => {});
}

/** 一次性加载全部正文（仅搜索页使用，避免影响首屏） */
export async function loadAllContents(): Promise<Record<string, string>> {
  const entries = await Promise.all(
    Object.entries(mdFiles).map(async ([k, loader]) => {
      const file = k.replace('../content/', '');
      const cached = cache.get(file);
      if (cached !== undefined) return [file, cached] as const;
      const raw = await loader();
      cache.set(file, raw);
      return [file, raw] as const;
    }),
  );
  return Object.fromEntries(entries) as Record<string, string>;
}
